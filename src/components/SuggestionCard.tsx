import React from 'react';

interface SuggestionCardProps {
  title: string;
  description: string;
  votes: number;
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ title, description, votes }) => {
  return (
    <div className="suggestion-card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <button className="vote-button">▲ {votes}</button> {/* votes를 버튼으로 표시 */}
    </div>
  );
};

export default SuggestionCard;