import { useState } from "react";

const AddTask = ({ onTaskAdd }) => {
	const [text, setText] = useState("");
	const [day, setDay] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("please input task");
			return;
		}
		if (!day) {
			alert("please input day");
			return;
		}

		onTaskAdd({ text, day, reminder });

		setText("");
		setDay("");
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input
					type="text"
					placeholder="input task"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="">Day And Time</label>
				<input
					type="text"
					placeholder="input day and time"
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label htmlFor="">Reminder</label>
				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<input type="submit" value="save" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
