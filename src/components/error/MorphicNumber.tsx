import './MorphicNumber.css';

interface MorphicNumberProps {
  code: string;
}

const MorphicNumber = ({ code }: MorphicNumberProps) => {
  return (
    <div className="morphic-container">
      <svg
        className="morphic-svg"
        viewBox="0 0 800 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="morphic-text morphic-bg"
        >
          {code}
        </text>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="morphic-text morphic-stroke"
        >
          {code}
        </text>
      </svg>
    </div>
  );
};

export default MorphicNumber;
