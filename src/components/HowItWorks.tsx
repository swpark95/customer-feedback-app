import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <h2>어떻게 사용하나요?</h2>
      <p>FeatureBoard는 여러분의 제품을 사용하는 사람들로부터 기능 제안과 피드백을 수집하는 데 도움을 줍니다.</p>
      <div className="steps">
        <div className="step">
          <span className="emoji" role="img" aria-label="rocket">🚀</span>
          <h3>1 단계: 피드백 페이지 만들기</h3>
          <p>사용자가 여러분의 제품에 새로운 기능이나 피드백을 제시할 수 있는 페이지를 만드세요</p>
        </div>
        <div className="step">
          <span className="emoji" role="img" aria-label="notebook">📒</span>
          <h3>2 단계: 피드백 수집하기</h3>
          <p>페이지를 사용자와 공유하고 사용자들이 작성한 피드백을 살펴보세요.</p>
        </div>
        <div className="step">
          <span className="emoji" role="img" aria-label="tools">🛠️</span>
          <h3>3 단계: 필요한 기능 개발하기</h3>
          <p>사용자들이 가장 많이 요청한 기능을 확인하고 개발하세요.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;