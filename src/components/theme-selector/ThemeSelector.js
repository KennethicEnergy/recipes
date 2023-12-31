// import { useState } from "react";
import { useTheme } from "../../hooks";

//styles
import "./ThemeSelector.css";

import modeIcon from "../../assets/mode-icon.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233"];

export default function ThemeSelector() {
	const { changeColor, changeMode, mode } = useTheme();
	// const [color, setColor] = useState("#58249c");

	const toggleMode = () => {
		changeMode(mode === "dark" ? "light" : "dark");
	};

	return (
		<div className='theme-selector'>
			<div className='mode-toggle'>
				<img
					onClick={toggleMode}
					src={modeIcon}
					alt='dark/light toggle icon'
					style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
				/>
			</div>
			<div className='theme-buttons'>
				{themeColors.map((color) => (
					<div
						key={color}
						onClick={() => changeColor(color)}
						style={{ background: color }}
					/>
				))}
				{/* <input
					className='colorrr'
					type='color'
					value={color}
					onChange={(e) => {
						setColor(e.target.value);
						changeColor(color);
					}}
				/> */}
			</div>
		</div>
	);
}
