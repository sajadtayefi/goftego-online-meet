import { Fragment } from "react";

function Btn({ cname, textCname, text, iconCname, icon }) {
    return (
        <Fragment>
            <button className={cname}>
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