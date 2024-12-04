import React, { useState } from 'react';
import '../SuggestionPage.css';

interface Suggestion {
  title: string;
  description: string;
  votes: number;
  status?: string;
  hasUpvoted?: boolean;
}

const SuggestionPage: React.FC = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    { title: "다크 모드 추가", description: "다크 모드도 만들어주세요. 밤에도 편하게 사용할 수 있으면 좋겠습니다~~", votes: 54,status: "Done"  },
    { title: "알림 우선순위 설정", description: "중요한 할 일에 대해 우선 알림을 받거나, 덜 중요한 일은 나중에 알림을 받을 수 있으면 더 효율적으로 작업을 관리할 수 있을 것 같습니다!", votes: 33, status: "In progress" },
    { title: "반복 일정 기능 추가", description: "반복적인 일정(예: 매주, 매월 반복되는 할 일)을 설정할 수 있는 기능을 추가해 주세요. 반복되는 업무나 회의 일정을 손쉽게 관리할 수 있으면 유용할 것 같습니다.", votes: 28, status: "To-do" },
    { title: "할 일 카테고리 기능 추가", description: "할 일을 카테고리별로 분류할 수 있는 기능이 필요해요 :) 예를 들어, '업무', '개인', '학습' 등으로 나누어 각 카테고리별로 할 일을 관리하면 더 체계적으로 일정 관리가 가능할 것 같아요~~", votes: 16,status: "To-do"  },
    { title: "좋아요!", description: "잘 쓰고 있어요! 돈 낸게 전혀 아깝지 않음 ㅎㅎ", votes: 10,status: "To-do"  }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleUpvote = (index: number) => {
    const updatedSuggestions = [...suggestions];
    if (!updatedSuggestions[index].hasUpvoted) {
      updatedSuggestions[index].votes += 1;
      updatedSuggestions[index].hasUpvoted = true;
      setSuggestions(updatedSuggestions);
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const newSuggestion: Suggestion = {
      title: newTitle,
      description: newDescription,
      votes: 0
    };
    setSuggestions([newSuggestion, ...suggestions]);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <div className="suggestion-page">
      <header className="header">
        <div className="logo">FeatureYard</div>
      </header>
      <main className="main-content">
        <h1>투두메이트</h1>
        <div className="content-wrapper">
          <div className="form-section">
            <h2>기능 요청 폼 </h2>
            <form onSubmit={handleCreatePost}>
              <label>
               제목
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="제목을 입력해주세요"
                />
              </label>
              <label>
                설명
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="제품에 대한 피드백이나 기능 요청사항을 적어주세요"
                ></textarea>
              </label>
              <button type="submit">포스트 작성하기</button>
            </form>
          </div>
          <div className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <SuggestionCard
                key={index}
                index={index}
                suggestion={suggestion}
                onUpvote={handleUpvote}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const SuggestionCard: React.FC<{ index: number; suggestion: Suggestion; onUpvote: (index: number) => void }> = ({ index, suggestion, onUpvote }) => {
  return (
    <div className="suggestion-card">
      <h3>{suggestion.title}</h3>
      <p>{suggestion.description}</p>
      <div className="card-footer">
        <button className="upvote" onClick={() => onUpvote(index)}>▲ {suggestion.votes}</button>
        {suggestion.status && <span className="status">{suggestion.status}</span>}
      </div>
    </div>
  );
};

export default SuggestionPage;