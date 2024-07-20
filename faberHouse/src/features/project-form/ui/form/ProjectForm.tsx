import { useEffect, useState } from "react";
import style from "../styles.module.scss";
import { FileInput, Input, MaskInput } from "shared/ui/input";
import { Header } from "../components/header/Header";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";
import { ProjectOfferSelection } from "../../model/selection/project-offer-selection";
import { setName, setPhone, setFile, useAddOfferMutation, checkForm } from "../../model";
import { convertToBase64 } from "shared/lib/utils/ConvertToBase64";

interface IProps {
  onSubmit?: (value: boolean) => void;
  isMobile?: boolean
}

export const ProjectFrom: React.FC<IProps> = (props) => {
  const { onSubmit, isMobile } = props;

  const dispatch = useAppDispatch();
  const store = useAppSelector(ProjectOfferSelection);
  const [submitOffer, result] = useAddOfferMutation();
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const submitHandler = async () => {
    dispatch(checkForm());
    setShouldSubmit(true);
  };

  useEffect(() => {
    const handle = async () => {
      if (!store.isErrors) {
        await submitOffer(store.form);
      }
    };

    if (shouldSubmit) {
      handle();
      setShouldSubmit(false);
    }
  }, [shouldSubmit]);

  useEffect(() => {
    if (result.isSuccess) {
      setTimeout(() => {
        onSubmit?.(true);
      }, 1500);
    }
  }, [result.isSuccess]);

  const changeFileHandler = async (files: FileList | null) => {
    if (files !== null) {
      const result = await convertToBase64(files[0], "");
      dispatch(setFile(result));
    }
  };

  return (
    <div className={style.wrap}>
      {result.isSuccess ? (
        <div className={style.success_message}>
          <p>Проект отправлен!</p>
        </div>
      ) : (
        <>
          {!isMobile && <Header />}
          <div className={style.form}>
            <Input isError={store.isErrorName} placeholder="Имя" getValue={(value) => dispatch(setName(value))} />
            <MaskInput
              isError={store.isErrorPhone}
              placeholder="Телефон"
              mask="+7 (999) 999 99 99"
              getValue={(value) => dispatch(setPhone(value))}
            />
            <FileInput isError={store.isErrorFile} placeholder="Выберите файл проекта" getFiles={changeFileHandler} />
            <button onClick={submitHandler}>Отправить проект на расчет</button>
          </div>
          <a href="#">
            Нажимая кнопку «Отправить» вы соглашаетесь с пользовательским соглашением и ознакомились с нашей политикой
            конфиденциальности
          </a>
        </>
      )}
    </div>
  );
};
