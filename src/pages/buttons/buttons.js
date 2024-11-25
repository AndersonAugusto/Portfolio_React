import "./buttons.scss"

const Buttons = () => {
  return (
    <>
      <div className="button-grid">
        <button className="button primary">Botão primário</button>
        <button className="button secondary">Botão secundário</button>
        <button className="button success">Botão de sucesso</button>
        <button className="button danger">Botão de perigo</button>
        <button className="button warning">Botão de aviso</button>

        <button className="button loading loading-1">Carregando</button>
        <button className="button loading loading-2">Carregando</button>
        <button className="button loading loading-3">Carregando</button>
        <button className="button loading loading-4">Carregando</button>
        <button className="button loading loading-5">Carregando</button>
      </div>
    </>
  )
}

export default Buttons
