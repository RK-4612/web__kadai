import React, { useState } from "react";
import "./../style.css"; 

const PlayerProfileApp = () => {
  const [searchName, setSearchName] = useState("");
  const [profile, setProfile] = useState(null);

  const players = [
    { name: "チョン ソンリョン", number: 1, position: "GK", age: 40, height: 191, weight: 91, photo: "photo/player1.jpg" },
    { name: "安藤 駿介", number: 21, position: "GK", age: 34, height: 183, weight: 81, photo: "photo/player2.jpg" },
    { name: "早坂 勇希", number: 22, position: "GK", age: 25, height: 183, weight: 78, photo: "photo/player3.jpg" },
    { name: "山口 瑠伊", number: 98, position: "GK", age: 26, height: 186, weight: 73, photo: "photo/player4.jpg" },
    { name: "高井 幸大", number: 2, position: "DF", age: 20, height: 191, weight: 84, photo: "photo/player5.jpg" },
    { name: "ジェジエウ", number: 4, position: "DF", age: 31, height: 186, weight: 84, photo: "photo/player6.jpg" },
    { name: "佐々木 旭", number: 5, position: "DF", age: 25, height: 178, weight: 72, photo: "photo/player7.jpg" },
    { name: "車屋 紳太郎", number: 7, position: "DF", age: 32, height: 178, weight: 73, photo: "photo/player8.jpg" },
    { name: "三浦 颯太", number: 13, position: "DF", age: 19, height: 180, weight: 70, photo: "photo/player9.jpg" },
    { name: "田邉 秀斗", number: 15, position: "DF", age: 22, height: 178, weight: 71, photo: "photo/player10.jpg" },
    { name: "ファン ウェルメスケルケン 際", number: 31, position: "DF", age: 30, height: 178, weight: 72, photo: "photo/player11.jpg" },
    { name: "丸山 祐市", number: 35, position: "DF", age: 35, height: 180, weight: 75, photo: "photo/player12.jpg" },
    { name: "神橋 良汰", number: 36, position: "DF", age: 18, height: 175, weight: 67, photo: "photo/player13.jpg" },
    { name: "土屋 櫂大", number: 39, position: "DF", age: 18, height: 173, weight: 65, photo: "photo/player14.jpg" },
    { name: "セサル アイダル", number: 44, position: "守備", age: 23, height: 175, weight: 67, photo: "photo/player15.jpg" },
    { name: "ゼ ヒカルド", number: 6, position: "MF", age: 26, height: 178, weight: 72, photo: "photo/player16.jpg" },
    { name: "橘田 健人", number: 8, position: "MF", age: 26, height: 168, weight: 65, photo: "photo/player17.jpg" },
    { name: "大島 僚太", number: 10, position: "MF", age: 32, height: 168, weight: 64, photo: "photo/player18.jpg" },
    { name: "脇坂 泰斗", number: 14, position: "MF", age: 29, height: 170, weight: 65, photo: "photo/player19.jpg" },
    { name: "河原 創", number: 19, position: "MF", age: 27, height: 168, weight: 65, photo: "photo/player20.jpg" },
    { name: "山内 日向汰", number: 26, position: "MF", age: 23, height: 168, weight: 66, photo: "photo/player21.jpg" },
    { name: "パトリッキ ヴェロン", number: 28, position: "MF", age: 20, height: 173, weight: 68, photo: "photo/player22.jpg" },
    { name: "由井 航太", number: 34, position: "MF", age: 19, height: 170, weight: 66, photo: "photo/player23.jpg" },
    { name: "家長 昭博", number: 41, position: "MF", age: 38, height: 173, weight: 70, photo: "photo/player24.jpg" },
    { name: "山本 悠樹", number: 77, position: "MF", age: 27, height: 173, weight: 64, photo: "photo/player25.jpg" },
    { name: "エリソン", number: 9, position: "FW", age: 25, height: 178, weight: 74, photo: "photo/player26.jpg" },
    { name: "小林 悠", number: 11, position: "FW", age: 37, height: 175, weight: 72, photo: "photo/player27.jpg" },
    { name: "遠野 大弥", number: 17, position: "FW", age: 26, height: 163, weight: 66, photo: "photo/player28.jpg" },
    { name: "山田 新", number: 20, position: "FW", age: 24, height: 173, weight: 75, photo: "photo/player29.jpg" },
    { name: "マルシーニョ", number: 23, position: "FW", age: 29, height: 173, weight: 66, photo: "photo/player30.jpg" },
    { name: "宮城 天", number: 24, position: "FW", age: 23, height: 175, weight: 68, photo: "photo/player31.jpg" },
    { name: "神田 奏真", number: 32, position: "FW", age: 18, height: 170, weight: 62, photo: "photo/player32.jpg" },
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
