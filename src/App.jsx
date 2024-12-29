import React, { useState } from "react";
import "./../style.css"; 

import player1 from './photo/player1.jpg';
import player2 from './photo/player2.jpg';
import player3 from './photo/player3.jpg';
import player4 from './photo/player4.jpg';
import player5 from './photo/player5.jpg';
import player6 from './photo/player6.jpg';
import player7 from './photo/player7.jpg';
import player8 from './photo/player8.jpg';
import player9 from './photo/player9.jpg';
import player10 from './photo/player10.jpg';
import player11 from './photo/player11.jpg';
import player12 from './photo/player12.jpg';
import player13 from './photo/player13.jpg';
import player14 from './photo/player14.jpg';
import player15 from './photo/player15.jpg';
import player16 from './photo/player16.jpg';
import player17 from './photo/player17.jpg';
import player18 from './photo/player18.jpg';
import player19 from './photo/player19.jpg';
import player20 from './photo/player20.jpg';
import player21 from './photo/player21.jpg';
import player22 from './photo/player22.jpg';
import player23 from './photo/player23.jpg';
import player24 from './photo/player24.jpg';
import player25 from './photo/player25.jpg';
import player26 from './photo/player26.jpg';
import player27 from './photo/player27.jpg';
import player28 from './photo/player28.jpg';
import player29 from './photo/player29.jpg';
import player30 from './photo/player30.jpg';
import player31 from './photo/player31.jpg';
import player32 from './photo/player32.jpg';

const PlayerProfileApp = () => {
  const [searchName, setSearchName] = useState("");
  const [profile, setProfile] = useState(null);

  const players = [
    { name: "チョン ソンリョン", number: 1, position: "GK", age: 40, height: 191, weight: 91, photo: player1 },
    { name: "安藤 駿介", number: 21, position: "GK", age: 34, height: 183, weight: 81, photo: player2 },
    { name: "早坂 勇希", number: 22, position: "GK", age: 25, height: 183, weight: 78, photo: player3 },
    { name: "山口 瑠伊", number: 98, position: "GK", age: 26, height: 186, weight: 73, photo: player4 },
    { name: "高井 幸大", number: 2, position: "DF", age: 20, height: 191, weight: 84, photo: player5 },
    { name: "ジェジエウ", number: 4, position: "DF", age: 31, height: 186, weight: 84, photo: player6 },
    { name: "佐々木 旭", number: 5, position: "DF", age: 25, height: 178, weight: 72, photo: player7 },
    { name: "車屋 紳太郎", number: 7, position: "DF", age: 32, height: 178, weight: 73, photo: player8 },
    { name: "三浦 颯太", number: 13, position: "DF", age: 19, height: 180, weight: 70, photo: player9 },
    { name: "田邉 秀斗", number: 15, position: "DF", age: 22, height: 178, weight: 71, photo: player10 },
    { name: "ファン ウェルメスケルケン 際", number: 31, position: "DF", age: 30, height: 178, weight: 72, photo: player11 },
    { name: "丸山 祐市", number: 35, position: "DF", age: 35, height: 180, weight: 75, photo: player12 },
    { name: "神橋 良汰", number: 36, position: "DF", age: 18, height: 175, weight: 67, photo: player13 },
    { name: "土屋 櫂大", number: 39, position: "DF", age: 18, height: 173, weight: 65, photo: player14 },
    { name: "セサル アイダル", number: 44, position: "守備", age: 23, height: 175, weight: 67, photo: player15 },
    { name: "ゼ ヒカルド", number: 6, position: "MF", age: 26, height: 178, weight: 72, photo: player16 },
    { name: "橘田 健人", number: 8, position: "MF", age: 26, height: 168, weight: 65, photo: player17 },
    { name: "大島 僚太", number: 10, position: "MF", age: 32, height: 168, weight: 64, photo: player18 },
    { name: "脇坂 泰斗", number: 14, position: "MF", age: 29, height: 170, weight: 65, photo: player19 },
    { name: "河原 創", number: 19, position: "MF", age: 27, height: 168, weight: 65, photo: player20 },
    { name: "山内 日向汰", number: 26, position: "MF", age: 23, height: 168, weight: 66, photo: player21 },
    { name: "パトリッキ ヴェロン", number: 28, position: "MF", age: 20, height: 173, weight: 68, photo: player22 },
    { name: "由井 航太", number: 34, position: "MF", age: 19, height: 170, weight: 66, photo: player23 },
    { name: "家長 昭博", number: 41, position: "MF", age: 38, height: 173, weight: 70, photo: player24 },
    { name: "山本 悠樹", number: 77, position: "MF", age: 27, height: 173, weight: 64, photo: player25 },
    { name: "エリソン", number: 9, position: "FW", age: 25, height: 178, weight: 74, photo: player26 },
    { name: "小林 悠", number: 11, position: "FW", age: 37, height: 175, weight: 72, photo: player27 },
    { name: "遠野 大弥", number: 17, position: "FW", age: 26, height: 163, weight: 66, photo: player28 },
    { name: "山田 新", number: 20, position: "FW", age: 24, height: 173, weight: 75, photo: player29 },
    { name: "マルシーニョ", number: 23, position: "FW", age: 29, height: 173, weight: 66, photo: player30 },
    { name: "宮城 天", number: 24, position: "FW", age: 23, height: 175, weight: 68, photo: player31 },
    { name: "神田 奏真", number: 32, position: "FW", age: 18, height: 170, weight: 62, photo: player32 },
  ];

  const handleSearch = () => {
    const foundPlayer = players.find((player) => player.name === searchName);
    setProfile(foundPlayer || null);
  };

  return (
    <div className="app-container">
      <h1>川崎フロンターレ 選手リスト</h1>
      <div className="player-grid">
        {players.map((player) => (
          <div key={player.name} className="player-card">
            <img src={player.photo} alt={`${player.name}`} className="player-photo" />
            <strong>{player.name}</strong>
          </div>
        ))}
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="選手名を入力"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearch}>検索</button>
      </div>
      {profile && (
        <div className="profile-container">
          <img src={profile.photo} alt={`${profile.name}`} className="profile-photo" />
          <h2>{profile.name}</h2>
          <p><strong>背番号:</strong> {profile.number}</p>
          <p><strong>ポジション:</strong> {profile.position}</p>
          <p><strong>年齢:</strong> {profile.age}</p>
          <p><strong>身長:</strong> {profile.height}</p>
          <p><strong>体重:</strong> {profile.weight}</p>
        </div>
      )}
      <div className="reference-container">
        <p>
          この資料は、川崎フロンターレ公式プロフィールページを参考にしています。詳細はこちらから:
          <a 
            href="https://www.frontale.co.jp/profile/2024/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            https://www.frontale.co.jp/profile/2024/
          </a>
        </p>
      </div>
    </div>
  );
};

export default PlayerProfileApp;
