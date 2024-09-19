import './CampoTexto.css'

const CampoTexto = (prop) => {
    const pleceholderModificado = `${prop.placeholder}`
    return (
        <div className="campo-texto">
            <label>{prop.label}</label>
            <input placeholder={pleceholderModificado} type="text" />
        </div>
    )
}

export default CampoTexto