function LabelInput({ text, colorfulText, cname, placeholder, type, inputCname, spanCname, labelcname }) {
    return (
        <div className={`${cname} w-full lg:w-[48%] mt-5 `}>
            <label className={labelcname} htmlFor="">
                {text} <span className={spanCname}>{colorfulText}</span>:
            </label>
            <input className={inputCname} placeholder={placeholder} type={type} />
        </div>
    );
}

export default LabelInput;