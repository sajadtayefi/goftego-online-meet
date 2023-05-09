import { Fragment } from "react";

function Btn({ cname, textCname, text, iconCname, icon ,onClick}) {
    return (
        <Fragment>
            <button onClick={onClick} className={cname}>
                <span className={textCname}>
                    {text}
                </span>
                <span className={iconCname}>
                    {icon}
                </span>
            </button>
        </Fragment>
    );
}

export default Btn;