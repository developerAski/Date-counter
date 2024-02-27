// Import state
import { useState } from "react";

const Counter = () => {
	const [step, setStep] = useState(1);
	const [counter, setCounter] = useState(0);

	function handleStepDec() {
		step <= 1 ? "" : setStep(s => s - 1);
	}

	const date = new Date();
	date.setDate(date.getDate() + counter);

	return (
		<div className="wrapper-counter">
			<div className="step">
				<button onClick={handleStepDec}>-</button>
				<p>Step: {step}</p>
				<button onClick={() => setStep(s => s + 1)}>+</button>
			</div>

			<div className="counter">
				<button onClick={() => setCounter(counter - step)}>-</button>
				<p>Count: {counter}</p>
				<button onClick={() => setCounter(counter + step)}>+</button>
			</div>

			<p>
				<span>
					{counter === 0
						? "Today is "
						: counter > 0
						? `${counter} days from today is `
						: `${Math.abs(counter)} days ago was `}
				</span>
				<span>{date.toDateString()}</span>
			</p>
		</div>
	);
};

export default Counter;
