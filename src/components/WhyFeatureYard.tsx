import React from 'react';
const WhyFeatureYard: React.FC = () => {
  return (
    <section className="why-featureyard">
      <h2>왜 FeatureBoard를 써야 하나요?</h2>
      <div className="benefits">
        <div className="benefit">
          <span className="emoji" role="img" aria-label="free">🆓</span>
          <h3>1. 무료로 사용할 수 있어요</h3>
          <p>사용자들로부터 피드백을 수집하는 것에 돈을 쓰지 않아도 됩니다.</p>
        </div>
        <div className="benefit">
          <span className="emoji" role="img" aria-label="money">💰</span>
          <h3>2. 사용자와 소통할 수 있어요</h3>
          <p>작성된 피드백을 기반으로 유저와 소통하면서 유용한 인사이트를 발견하세요.</p>
        </div>
        <div className="benefit">
          <span className="emoji" role="img" aria-label="rocket">🚀</span>
          <h3>진짜 사용하기 쉬워요</h3>
          <p>앱을 설치할 필요 없이 유저에게 피드백을 받을 수 있어요.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyFeatureYard;