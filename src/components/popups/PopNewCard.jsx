import { Link, useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { paths } from "../../lib/paths";
import { useState } from "react";
import { useUserContext } from "../../contexts/hooks/useUser";
import { postTask } from "../../lib/api";
import { useTaskContext } from "../../contexts/hooks/useCards";
import * as S from "../popups/PopNewCard.styled"

function PopNewCard() {

  const {user} = useUserContext();
  const {setCards} = useTaskContext();
  const navigete = useNavigate();
  const [selectedDay, setSelectedDay] = useState();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    topic: "",
  });

  const addNewTask = async () => {
    const taskData = { ...newTask, date:selectedDay};
    await postTask({...taskData, token: user?.token}).then((response) => {
      setCards(response.tasks);
      navigete(-1);
    }).catch((error) => {
      console.log(error.message);
    });
  }

  // let color;
  // switch (topic) {
  //   case "Research":
  //     color = "_green";
  //     break;
  //   case "Web Design":
  //     color = "_orange";
  //     break;
  //   case "Copywriting":
  //     color = "_purple";
  //     break;
  //   default:
  //     color = "_grey";
  // }

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTtl>
              Создание задачи
            </S.PopNewCardTtl>
            <Link to={paths.MAIN}>
              <S.PopNewCardClose>
                &#10006;
              </S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardFormFormNew id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.Subttl htmlFor="formTitle">
                    Название задачи
                  </S.Subttl>
                  <S.FormNewInput
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  autoFocus
                  onChange={(e) => {setNewTask({...newTask, title: e.target.value})}}>
                  </S.FormNewInput>
                </S.FormNewBlock>  
                <S.FormNewBlock>
                  <S.Subttl htmlFor="textArea">
                    Описание задачи
                  </S.Subttl>
                  <S.FormNewArea
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  onChange={(e) => {setNewTask({...newTask, description: e.target.value})}}>
                  </S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardFormFormNew>
              <Calendar selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
            </S.PopNewCardWrap>
            <S.Categories>
              <S.CategoriesPSubttl>Категория</S.CategoriesPSubttl>
              <label>
                Web Design
                <input type="radio" name="topic" value="Web Design" onChange={(e) => {setNewTask({...newTask, topic: e.target.value})}} />
              </label>
              <label>
                Research
                <input type="radio" name="topic" value="Research" onChange={(e) => {setNewTask({...newTask, topic: e.target.value})}} />
              </label>
              <label>
              Copywriting
                <input type="radio" name="topic" value="Copywriting" onChange={(e) => {setNewTask({...newTask, topic: e.target.value})}} />
              </label>
              {/* <S.CategoriesThemes>
                <S.CategoriesThemeOrange>
                  <S.Orange value={"Web Design"} onClick={(e) => {setNewTask({...newTask, topic: e.target.value})}}>
                    Web Design
                  </S.Orange>
                </S.CategoriesThemeOrange>
                {/* <div className="categories__theme _orange _active-category">
                  
                </div> 
                <S.CategoriesThemeGreen>
                  <S.Green value="Research" onClick={(e) => {setNewTask({...newTask, topic: e.target.value})}}>
                    Research
                  </S.Green>
                </S.CategoriesThemeGreen>
                <S.CategoriesThemePurple>
                  <S.Purple value="Copywriting" onClick={(e) => {setNewTask({...newTask, topic: e.target.value})}}>
                    Copywriting
                  </S.Purple>
                </S.CategoriesThemePurple>
              </S.CategoriesThemes> */}
            </S.Categories>
            <S.FormNewCreate id="btnCreate" onClick={addNewTask}>
              Создать задачу
            </S.FormNewCreate>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
