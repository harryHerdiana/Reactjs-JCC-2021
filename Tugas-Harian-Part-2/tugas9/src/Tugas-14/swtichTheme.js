import React, { useContext, useState } from "react"
import { ThemeContext } from "../Context/themeContext"
import { Switch } from 'antd';
const SwitchTheme = () => {

    const {theme, setTheme} = useContext(ThemeContext)
    const [mode,setMode] = useState("Dark")

    const handleChangeTheme = () => {
        setTheme( theme === "light" ? "dark" : "light" )
        setMode( mode === "Light" ? "Dark": "Light")
    }

    return(
            <Switch defaultChecked onChange={handleChangeTheme} checkedChildren={mode} unCheckedChildren={mode} style={{width:"1rem",position:"absolute", right:"20px"}}/>


    )
}

export default SwitchTheme