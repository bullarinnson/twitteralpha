import React from 'react';
import Post from './Post';

function Posts() {
  return (
    <div>
      <Post avatar="https://variety.com/wp-content/uploads/2021/08/Robin.jpg?w=681&h=383&crop=1" displayName="Robin" username="@Robin" text="Batman said i couldnt go out tonight :(" image="https://media2.giphy.com/media/Q2tS8xloz0cg0/giphy.gif" />
      <Post avatar="https://cdn1.epicgames.com/undefined/offer/batman-arkham-asylum_promo-1567x917-f1248a17909e224f91845b223542306a.jpg" displayName="Batman" username="@ImBatman" text="My back is killing me! No patroling tonight" />
      <Post avatar="https://wegotthiscovered.com/wp-content/uploads/2020/07/Bane-The-Dark-Knight-Rises.jpeg" displayName="Bane" username="@MexicanWrestler" text="Just broke the bats back! victory" image="https://preview.redd.it/esu1hvaiio551.jpg?auto=webp&s=a819c1a6becd78d503c4c5dd0b139bc352427e1d" />
      <Post avatar="https://www.denofgeek.com/wp-content/uploads/2015/08/39189.jpg?resize=640%2C432" displayName="Catwoman" username="@Selina" text="meeeeeowww" image="https://c.tenor.com/HeU6nDGMdbMAAAAC/catwoman-meow.gif" />
      <Post avatar="https://wegotthiscovered.com/wp-content/uploads/2021/08/redhood-banner.jpg" displayName="RedHood" username="@BatmanSucks" text="How is it that i am the best robin ever" />
      <Post avatar="https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/7538232-three-jokers-1-cvr-fnl-1583776056592.jpg" displayName="Joker" username="@I<3Batman" text="@ImBatman I can come and fix that for you" image="https://i.gifer.com/YMAo.gif" />
      <Post avatar="https://i2.wp.com/bunker158.com/wp-content/uploads/2021/01/harley-quinn-comic-life-size-bust-sideshow-bunker158-9.jpg?fit=1500%2C1000&ssl=1" displayName="Harley" username="@HarleyQuinn" text="what pudding, what are you saying" />
    </div>
  );
}

export default Posts;
