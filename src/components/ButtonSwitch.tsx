type ButtonSwitchProps = {
  id: number;
  type: "movie" | "tv";
  onClick: (type: "movie" | "tv") => void;
  isActive?: boolean;
};

const ButtonSwitch = ({ id, type, onClick, isActive }: ButtonSwitchProps) => (
  <div>
    <button
      key={id}
      onClick={() => {
        console.log("Bouton cliqué :", type, "id =", id);
        onClick?.(type);
      }}
      className={`m-1 border border-brand px-3 py-1 rounded-full text-sm hover:bg-brand transition
      ${isActive ? "bg-brand text-black" : ""}`}
    >
      {type}
    </button>
  </div>
);

export default ButtonSwitch;
