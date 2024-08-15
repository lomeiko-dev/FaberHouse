import classNames from "classnames";
import { IProject } from "../../../model";
import style from "./styles.module.scss";

interface IProps {
  className?: string;
  data: IProject;
}

export const Complectation: React.FC<IProps> = (props) => {
  const { className, data } = props;

  return (
    <div className={classNames(style.complectation, className)}>
      <table>
        <tr>
          <th>Фундамент</th>
          <td>{data.foundation}</td>
        </tr>
        <tr>
          <th>Высота помещений</th>
          <td>{data.roomHeight}</td>
        </tr>
        <tr>
          <th>Наружные стены 1-го</th>
          <td>{data.exteriorWalls}</td>
        </tr>
      </table>
    </div>
  );
};
