import './App.css';
import React from 'react';

import { PostCard } from './components/PostCard'
import { OnlinerCard } from './components/OnlinerCard'
import { RabotaCard } from './components/RabotaCard'
import { XistoreCard } from './components/XistoreCard'

const userPosts = [
  {
    name: "Siarhei Chura",
    education: "BNTU",
    border: "·",
    date: "7 Sep",
    post: "I have something insightful to say, as usual",
    avatarUrl:
      "https://i.pinimg.com/236x/e4/36/54/e4365410af2e293edf4694eca6cc2e2e.jpg?nii=t",
    time: "2 seconds ago",
  },
];

const onlinerPosts = [
  {
    title: "В Минске появился сидр-бар «Белый налив»",
    article: "НЕДВИЖИМОСТЬ",
    counter: "268",
  },
];

const rabotaPosts = [
  {
    title: "Junior React.js Engineer (Internship/React.js Lab)",
    company: "OOO АйтиРекс Групп",
    city: "Минск",
    date: "10 сентября",
    description1:
      "Медицинское обслуживание. Онлайн-ивенты. Реферальная программа.",
    description2:
      "Знание базового синтаксиса, базовых объектов и их методов, понимание базовых ",
    description3: "концепций. Опыт написания кода на JavaScript/ES6.",
  },
];

const xistorePosts = [
  {
    image:
      "https://xistore.by/upload/resize/section/products/a81/b77ccb486d139a5c675ef477c9879be0_200_200_40@x2.jpg",
    title: "Колонки",
    description: "Умная колонка Яндекс Станция Лайт Алиса (Фиолетовая)",
    text: "Супер цена:",
    price: "139.00",
    oldPrice: "169.51",
  },
];
function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="container-title">Task 1</h1>
        {userPosts.map((userPost) => {
          const { name, education, post, date, avatarUrl, time, border } =
            userPost;

          return (
            <PostCard
              name={name}
              education={education}
              border={border}
              date={date}
              post={post}
              avatarUrl={avatarUrl}
              time={time}
            />
          );
        })}
      </div>

      <div className="container">
        <h1 className="container-title">Task 2</h1>
        {onlinerPosts.map((onlinerPost) => {
          const { title, article, counter } = onlinerPost;

          return (
            <OnlinerCard title={title} article={article} counter={counter} />
          );
        })}
      </div>

      <div className="container">
        <h1 className="container-title">Task 3</h1>
        {rabotaPosts.map((rabotaPost) => {
          const {
            title,
            company,
            city,
            date,
            description1,
            description2,
            description3,
          } = rabotaPost;

          return (
            <RabotaCard
              title={title}
              company={company}
              city={city}
              date={date}
              description1={description1}
              description2={description2}
              description3={description3}
            />
          );
        })}
      </div>

      <div className="container">
        <h1 className="container-title">Task 4 Xistore.by</h1>
        {xistorePosts.map((xistorePost) => {
          const { image, title, description, text, price, oldPrice } =
            xistorePost;

          return (
            <XistoreCard
              title={title}
              image={image}
              description={description}
              text={text}
              price={price}
              oldPrice={oldPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

