import css from "./ButtonContainer.module.css";

const ButtonContainer = () => {

	const butNames = ['C','back','%,','/','7','8','9','*','4','5','6','-','1','2','3','+','.','0','=','Save']
  return (
    <>
      <div className="butContainer">

			{butNames.map((butNames) => <button className={css.but}>{butNames}</button>)}
   
      </div>
    </>
  );
};

export default ButtonContainer;
