import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';

const ExecutionState = {
  IDLE: 'idle',
  RUNNING: 'running',
  WAITING: 'waiting',
  COMPLETED: 'completed',
};

export default function SignalSimulator({
  code = `use function Workflow\\await;
use Workflow\\SignalMethod;
use Workflow\\Workflow;

class MyWorkflow extends Workflow
{
    private $ready = false;

    #[SignalMethod]
    public function setReady($ready)
    {
        $this->ready = $ready;
    }

    public function execute()
    {
        yield await(fn () => $this->ready);
    }
}`,
  steps = [
    { line: 17, duration: 0, label: "yield await(fn () => $this->ready)", type: 'wait' },
    { line: 12, duration: 300, label: "$this->ready = $ready", type: 'signal' },
    { line: 17, duration: 500, label: "await() condition satisfied", type: 'run' },
  ],
  signalName = "setReady(true)",
  title = "Signal Execution Simulator",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [executionState, setExecutionState] = useState(ExecutionState.IDLE);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [waitingTime, setWaitingTime] = useState(0);
  const animationRef = useRef(null);
  const waitingIntervalRef = useRef(null);

  const codeLines = code.split('\n');

  const resetSimulation = () => {
    setExecutionState(ExecutionState.IDLE);
    setCurrentStepIndex(-1);
    setProgress(0);
    setWaitingTime(0);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (waitingIntervalRef.current) {
      clearInterval(waitingIntervalRef.current);
    }
  };

  const runSimulation = () => {
    resetSimulation();
    setExecutionState(ExecutionState.RUNNING);
    runStep(0);
  };

  const runStep = (stepIndex) => {
    if (stepIndex >= steps.length) {
      setExecutionState(ExecutionState.COMPLETED);
      setCurrentStepIndex(-1);
      return;
    }

    const step = steps[stepIndex];
    setCurrentStepIndex(stepIndex);

    if (step.type === 'wait') {
      // Pause and wait for signal
      setExecutionState(ExecutionState.WAITING);
      setProgress(0);
      // Start counting waiting time
      const startTime = Date.now();
      waitingIntervalRef.current = setInterval(() => {
        setWaitingTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return;
    }

    // Run the step with animation
    const startTime = performance.now();
    
    const animate = (timestamp) => {
      const elapsed = timestamp - startTime;
      const stepProgress = Math.min((elapsed / step.duration) * 100, 100);
      setProgress(stepProgress);

      if (elapsed < step.duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Move to next step
        runStep(stepIndex + 1);
      }
    };

    if (step.duration > 0) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      runStep(stepIndex + 1);
    }
  };

  const sendSignal = () => {
    if (executionState !== ExecutionState.WAITING) return;
    
    // Clear waiting interval
    if (waitingIntervalRef.current) {
      clearInterval(waitingIntervalRef.current);
    }
    
    setExecutionState(ExecutionState.RUNNING);
    // Continue to the signal handler step (step after wait)
    const nextStepIndex = currentStepIndex + 1;
    runStep(nextStepIndex);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (waitingIntervalRef.current) {
        clearInterval(waitingIntervalRef.current);
      }
    };
  }, []);

  const getCurrentStep = () => {
    if (currentStepIndex >= 0 && currentStepIndex < steps.length) {
      return steps[currentStepIndex];
    }
    return null;
  };

  return (
    <div className={styles.simulatorWrapper}>
      <button
        className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</span>
        <span>Try it out!</span>
      </button>

      {isExpanded && (
        <div className={styles.simulatorContainer}>
          <div className={styles.simulatorHeader}>
            <h4 className={styles.simulatorTitle}>{title}</h4>
            <div className={styles.controls}>
              <button
                className={styles.playButton}
                onClick={runSimulation}
                disabled={executionState === ExecutionState.RUNNING || executionState === ExecutionState.WAITING}
              >
                {executionState === ExecutionState.RUNNING ? '⏳ Running...' : 
                 executionState === ExecutionState.WAITING ? '⏸️ Waiting...' : '▶ Play'}
              </button>
              <button
                className={styles.resetButton}
                onClick={resetSimulation}
                disabled={executionState === ExecutionState.RUNNING}
              >
                🔄 Reset
              </button>
            </div>
          </div>

          <div className={styles.codeContainer}>
            <pre className={styles.codeBlock}>
              {codeLines.map((line, index) => {
                const lineNumber = index + 1;
                const currentStep = getCurrentStep();
                const isHighlighted = currentStep && currentStep.line === lineNumber;
                const isWaitingLine = isHighlighted && executionState === ExecutionState.WAITING;
                
                return (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${isHighlighted ? styles.highlighted : ''} ${isWaitingLine ? styles.waiting : ''}`}
                  >
                    <span className={styles.lineNumber}>{lineNumber}</span>
                    <span className={styles.lineContent}>{line || ' '}</span>
                    {isWaitingLine && (
                      <span className={styles.waitingBadge}>{waitingTime}s</span>
                    )}
                  </div>
                );
              })}
            </pre>
          </div>

          {executionState === ExecutionState.WAITING && (
            <div className={styles.signalSection}>
              <button
                className={styles.signalButton}
                onClick={sendSignal}
              >
                📤 Send Signal: <code>{signalName}</code>
              </button>
            </div>
          )}

          <div className={styles.statusBar}>
            <span className={`${styles.statusIndicator} ${styles[executionState]}`}>
              {executionState === ExecutionState.IDLE && '⏸️ Ready'}
              {executionState === ExecutionState.RUNNING && '▶️ Running'}
              {executionState === ExecutionState.WAITING && '⏳ Waiting for Signal'}
              {executionState === ExecutionState.COMPLETED && '✅ Completed'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
