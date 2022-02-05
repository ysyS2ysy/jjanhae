import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import styles from "./RegisterTemplate.module.css";

const CheckTOS = ({ progress }) => {
  const [TOS, setTOS] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const handleTosClick = () => {
    setTOS((prev) => !prev);
  };
  const handlePrivacyClick = () => {
    setPrivacy((prev) => !prev);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/user/signup/checkId");
  };

  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  useEffect(() => {
    if (TOS & privacy) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
  }, [TOS, privacy]);
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <div className={styles.contents}>
          <div className={styles.progressBar}>
            <ProgressBar
              completed={progress}
              customLabel=" "
              width={"20%"}
              height={"5px"}
              bgColor="#ff2e63"
              baseBgColor="#51f0ed1a"
            />
          </div>
          <h2 className={styles.info}>
            짠해 회원가입을 위해
            <br />
            서비스 약관에 동의해 주세요.
          </h2>
          <form
            className={styles.form}
            onKeyPress={onCheckEnter}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className={styles.inputArea}>
              <div className={styles.inputRow}>
                <div className={styles.checkbox}>
                  <input
                    id="TOS"
                    type="checkbox"
                    value={TOS}
                    className={TOS ? styles.checked : styles.unchecked}
                    onClick={handleTosClick}
                  />
                  <label htmlFor="TOS" className={styles.label}>
                    짠해서비스 약관
                  </label>
                </div>
                <div className={styles.policy}>
                  <h1>이용약관 제 1 장 총 칙 </h1>
                  <h2> 제1조 목적</h2>
                  <span>
                    이 약관은 짠해(이하 “회사”)가 제공하는 “Jjanhae”와 관련하여
                    회사와 이용자 간의 권리와 의무 및 필요한 사항을 정하는데 그
                    목적이 있습니다.{" "}
                  </span>
                  <h2>제 2 조 (용어의 정의)</h2>
                  <span>
                    1. 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1)
                    "Jjanhae 랜선 술자리 서비스(이하 "서비스")"란 PC에서
                    카메라와 화면 공유를 통해 짠해만의 컨텐츠를 이용하여
                    실시간으로 다양한 사람들과 소통할 수 있는 플랫폼입니다. 2)
                    "이용자"란 본 약관에 동의하고 회사가 제공하는 서비스 이용
                    자격을 부여 받은 자를 의미합니다. 3) "방장"이란 파티룸을
                    개설하고 운영하는 이용자를 의미합니다. 4) "탈퇴"란 이용자가
                    서비스 이용 계약을 종료하는 의사표시를 말합니다. 2. 이
                    약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을
                    제외하고는 관계 법령에서 정하는 바를 따릅니다.
                  </span>
                  <h2>제 3 조 (약관의 효력과 변경)</h2>
                  <span>
                    1. 회사는 서비스의 초기화면에 이 약관을 명시합니다. 2. 이
                    약관은 이용자가 서비스를 이용함과 동시에 효력이 발생하며, 이
                    약관에 동의하지 않을 경우 이용자는 서비스 이용계약을 철회할
                    수 있습니다. 3. 회사는 이 약관을 관련 법령에 위배되지 않는
                    범위에서 변경할 수 있습니다. 4. 변경된 약관은 적용일 및
                    변경내용, 변경사유 등을 명시하여 적용일 15일 이전(다만,
                    이용자에게 불리한 약관의 개정의 경우에는 적용일 30일
                    이전)부터 적용일 전일까지 서비스에 고지한 후 적용일부터
                    효력이 발생됩니다. 5. 이용자는 변경된 약관에 동의하지 않을
                    권리가 있으며, 변경된 약관에 동의하지 않을 경우에는 서비스
                    이용을 중단하고 탈퇴할 수 있습니다. 6. 변경된 약관 공지 시
                    이용자가 회사에 명시적으로 "거부"의 의사표시를 하지 않거나
                    또는 이용자가 변경된 이용약관의 적용일 이후에도 서비스를
                    계속 사용하는 경우에는 변경된 약관에 동의한 것으로
                    간주합니다.
                  </span>
                  <h1>제 2 장 [이 용]</h1>
                  <h2> 제 4 조 (이용 계약의 성립)</h2>
                  <span>
                    1. 서비스 이용계약은 서비스를 이용하려는 자가 본 약관에
                    동의하고 서비스를 이용함으로써 성립됩니다. 2. 청소년(만 19세
                    미만인 자)이나 피한정후견인, 피성년후견인이 서비스를
                    이용하려면 법정대리인의 동의를 얻어야 합니다. 또한 연령에
                    따라 일부 서비스에 대하여 이용이 제한될 수 있습니다.
                  </span>
                  <h2>제 5 조 (서비스 가입 및 계정)</h2>
                  <span>
                    1. 이용자는 회사가 제공하는 방식을 통해 서비스에 가입할 수
                    있습니다. 2. 회사는 서비스에 가입한 이용자에게 닉네임,
                    고유아이디가 포함된 계정을 제공합니다. 3. 회사는 계정 정보를
                    통해 미성년자 여부 확인 등의 이용자 관리업무를 수행합니다.
                    4. 이용자는 자신의 계정을 성실히 관리하여야 합니다. 이용자가
                    본인의 계정을 소홀히 관리하거나 제3자에게 이용을
                    승낙함으로써 발생하는 손해에 대하여는 이용자에게 책임이
                    있습니다.
                  </span>
                  <h2>제 7 조 (회사의 의무)</h2>
                  <span>
                    1. 회사는 관계 법령을 준수하고, 이 약관에서 정하는 권리의
                    행사와 의무의 이행을 신의에 따라 성실하게 수행합니다. 2.
                    회사는 계속적이고 안정적인 서비스의 제공을 위하여 최선의
                    노력을 다합니다. 3. 회사는 이용자들이 서비스를 편리하게
                    이용할 수 있도록 최선의 노력을 다합니다. 4. 회사는 이용자가
                    제기한 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는
                    합리적인 기간 내에 신속하게 처리하기 위해 노력합니다.
                  </span>
                  <h2>제 8 조 (이용자의 의무)</h2>
                  <span>
                    1. 이용자는 서비스를 본래의 이용 목적 이외의 용도로
                    사용하거나 다음 각 호에 해당하는 행위를 해서는 안되며,
                    아래의 항을 위반하는 것으로 의심되는 이용자를 발견할 시
                    이메일, ‘신고하기’ 등을 통해 신고를 접수하여야 합니다. 1)
                    다른 이용자의 계정 혹은 타인의 결제 정보를 도용하거나 회사의
                    관리자를 사칭하는 행위 2) 서비스 이용 중 허위 사실을
                    기재하여 서비스 운영을 방해하는 행위 3) 회사가 제공한 계정을
                    타인에게 양도하는 행위 4) 회사의 서비스를 이용하여 얻은
                    정보를 회사의 사전 승낙없이 복제, 유통하여 상업적으로
                    이용하는 행위 5) 사기성, 음란성, 사행성, 혐오성 메시지 혹은
                    음성 등이 담긴 콘텐츠를 방송하거나 게시하는 행위 6) 타인의
                    명예를 훼손하거나 사이버 불링, 폭력적인 행위를 하는 등
                    이용자의 정상적인 서비스 이용을 방해하는 행위 7) 저작권을
                    포함한 지적재산권, 초상권 등 회사 및 제 3자의 기타 권리를
                    침해하는 행위 8) 타인의 개인정보를 동의없이 수집, 저장,
                    유포, 게시하는 행위 9) 일반적이지 않은 방식으로 데이터를
                    조작하여 회사의 서비스 운영을 방해하는 행위 10) 컴퓨터
                    소프트웨어, 하드웨어, 전기 통신 장비의 정상적인 가동을 방해,
                    파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터
                    코드, 파일, 프로그램을 포함하고 있는 자료를 전송, 게시,
                    유포, 사용하는 행위 11) 서버 해킹, 데이터 유출, 버그 등을
                    통해 서비스를 변경하거나 회사가 정하지 않은 방식으로
                    서비스를 이용하는 행위 12) 관계 법령, 서비스이용약관,
                    운영정책, 공지사항을 위배하는 행위 13) 기타 공공질서 및
                    미풍양속을 위반하거나 불법적, 부당한 방식의 행동을 하는 행위
                    2. 회사는 이용자가 제 1항에 정한 서비스 이용 제한 기준을
                    위반하여 회사의 서비스에 지장을 초래한 경우, 사전 통보 없이
                    기간을 정하여 서비스 이용을 제한할 수 있습니다. 3. 회사는
                    이용자의 이용 제한이 정당한 경우 이로 인하여 이용자가 입은
                    손해에 대해 배상하지 않습니다.
                  </span>
                  <h2>제 9 조 (게시물에 대한 저작권)</h2>
                  <span>
                    {" "}
                    1. 이용자가 서비스 내에 게시한 콘텐츠의 저작권은 이용자
                    본인에게 있습니다. 2. 서비스 이용 시 다른 이용자 또는 제
                    3자의 저작권 등 기타 권리를 침해하는 행위는 금지됩니다.
                    서비스 이용 중 저작권과 관련하여 발생하는 분쟁에 대한 모든
                    책임은 이용자에게 있습니다. 3. 회사는 이용자가 게시한
                    콘텐츠를 국내외에서 제공하는 관련 서비스(홍보 등) 목적으로
                    사용할 수 있습니다. 4. 제 3항의 사용범위는 이용자가 서비스
                    내에 게시한 콘텐츠의 복제, 수정, 전시, 전송, 배포, 출판 및
                    2차 저작물과 편집 저작물 작성을 포함합니다. 5. 이용자가
                    게시한 콘텐츠를 상업적 혹은 제 3항에서 정하지 않은 방식으로
                    사용할 경우, 회사는 전화, 팩스, 전자 우편 등의 방식으로
                    이용자에게 동의를 얻을 수 있으며, 별도의 보상을 할 수
                    있습니다.
                  </span>
                  <h2>제 10 조 (서비스의 제공 시간 및 중지, 변경)</h2>
                  <span>
                    1. 회사는 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴
                    1일 24시간 서비스를 제공합니다. 2. 회사는 시스템 정기점검 등
                    서비스 운영상 필요한 경우, 일정기간 동안 서비스를 일시
                    중지시킬 수 있으며, 이러한 경우 회사는 그 내용 및 시간을
                    서비스 내에 공지합니다. 다만, 회사가 사전에 통지할 수 없는
                    부득이한 사유가 있는 경우 사후에 통지할 수 있습니다. 3.
                    회사는 새로운 서비스, 각종 버그 패치 등 서비스 운영 또는
                    기술상 필요한 경우에는 제공하고 있는 서비스의 전부 또는
                    일부를 수정, 추가, 폐지 등 변경할 수 있습니다. 변경될
                    서비스의 내용 및 일자 등에 대해서는 서비스 내에 공지함으로써
                    이용자에 대한 통지를 대체합니다. 4. 회사는 서비스의 기획이나
                    운영상 또는 회사의 긴박한 상황 등에 의해 서비스 전부를
                    중단할 필요가 있는 경우 서비스 내에 이를 공지하고 서비스의
                    제공을 중단할 수 있습니다. 단, 회사가 통제할 수 없는 사유로
                    인한 경우 공지없이 서비스가 중단될 수 있습니다.
                  </span>
                  <h2>제 11 조 (광고의 게재)</h2>
                  <span>
                    회사는 본 서비스를 유지하기 위하여 서비스 내에 광고를 게재할
                    수 있습니다. 서비스에 게재되는 제3자가 주체인 광고에
                    이용자가 참여하거나 거래함으로써 발생하는 손실과 손해에
                    대해서 회사는 어떠한 책임도 부담하지 않습니다.
                  </span>
                  <h2>제 12 조 (계약 해지)</h2>
                  <span>
                    이용자는 서비스 이용을 원하지 않는 경우, 회원탈퇴를 통하여
                    언제든지 이용 계약을 해지할 수 있으며 탈퇴 신청 이후에는
                    탈퇴 취소 및 탈퇴한 계정에 대해 복구할 수 없습니다. 이용자의
                    탈퇴 신청 7일 후 계정 탈퇴 및 개인 정보 삭제가 완료됩니다.
                    이용자는 계정 탈퇴 완료 이후에 서비스에 재가입이 가능합니다.
                  </span>
                </div>
              </div>
              <div className={styles.inputRow}>
                <div className={styles.checkbox}>
                  <input
                    id="privacy"
                    type="checkbox"
                    value={privacy}
                    className={privacy ? styles.checked : styles.unchecked}
                    onClick={handlePrivacyClick}
                  />
                  <label htmlFor="privacy" className={styles.label}>
                    개인정보 처리방침
                  </label>
                </div>
                <div className={styles.policy}>
                  <span>
                    [ JJanhae ] 은(는) 「개인정보 보호법」 제30조에 따라
                    정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
                    원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                    처리방침을 수립·공개합니다. ○ 이 개인정보처리방침은 2022년
                    1월 1부터 적용됩니다. 제1조(개인정보의 처리 목적)
                    JJanhae은(는) 다음의 목적을 위하여 개인정보를 처리합니다.
                    처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
                    이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보
                    보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를
                    이행할 예정입니다. 1. 홈페이지 회원가입 및 관리 회원
                    가입의사 확인, 회원자격 유지·관리, 서비스 부정이용 방지
                    목적으로 개인정보를 처리합니다. 2. 재화 또는 서비스 제공
                    서비스 제공을 목적으로 개인정보를 처리합니다.
                    제2조(개인정보의 처리 및 보유 기간) ① JJanhae은(는) 법령에
                    따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를
                    수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를
                    처리·보유합니다. ② 각각의 개인정보 처리 및 보유 기간은
                    다음과 같습니다. 1.&lt; 홈페이지 회원가입 및 관리 &gt; &lt;
                    홈페이지 회원가입 및 관리 &gt; 와 관련한 개인정보는
                    수집.이용에 관한 동의일로부터&lt;1년&gt;까지 위 이용목적을
                    위하여 보유.이용됩니다. 보유근거 : 신용정보의 수집/처리 및
                    이용 등에 관한 기록 관련법령 : 신용정보의 수집/처리 및 이용
                    등에 관한 기록 : 3년 예외사유 : 제3조(개인정보의 제3자 제공)
                    ① &lt; JJanhae &gt;은(는) 개인정보를 제1조(개인정보의 처리
                    목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
                    법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에
                    해당하는 경우에만 개인정보를 제3자에게 제공합니다. ② &lt;
                    JJanhae &gt;은(는) 다음과 같이 개인정보를 제3자에게 제공하고
                    있습니다. 1. 개인정보를 제공받는 자 : 제공받는 자의 개인정보
                    이용목적 : 제공받는 자의 보유.이용기간: 제4조(개인정보처리
                    위탁) ① &lt; JJanhae &gt;은(는) 원활한 개인정보 업무처리를
                    위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다. 1.
                    위탁받는 자 (수탁자) : 위탁하는 업무의 내용 : 위탁기간 : ②
                    &lt; JJanhae &gt;은(는) 위탁계약 체결시 「개인정보 보호법」
                    제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지,
                    기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
                    관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
                    명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
                    있습니다. ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는
                    지체없이 본 개인정보 처리방침을 통하여 공개하도록
                    하겠습니다. 제5조(정보주체와 법정대리인의 권리·의무 및 그
                    행사방법) ① 정보주체는 JJanhae에 대해 언제든지 개인정보
                    열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
                    ② 제1항에 따른 권리 행사는 JJanhae에 대해 「개인정보
                    보호법」 시행령 제41조제1항에 따라 서면, 전자우편,
                    모사전송(FAX) 등을 통하여 하실 수 있으며 JJanhae은(는) 이에
                    대해 지체 없이 조치하겠습니다. ③ 제1항에 따른 권리 행사는
                    정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여
                    하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한
                    고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
                    제출하셔야 합니다. ④ 개인정보 열람 및 처리정지 요구는
                    「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여
                    정보주체의 권리가 제한 될 수 있습니다. ⑤ 개인정보의 정정 및
                    삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로
                    명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다. ⑥
                    JJanhae은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의
                    요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나
                    정당한 대리인인지를 확인합니다. 제6조(처리하는 개인정보의
                    항목 작성) ① &lt; JJanhae &gt;은(는) 다음의 개인정보 항목을
                    처리하고 있습니다. &lt; 홈페이지 회원가입 및 관리 &gt;
                    필수항목 : 이메일, 로그인ID, 서비스 이용 기록 선택항목 :
                    제7조(개인정보의 파기) ① &lt; JJanhae &gt; 은(는) 개인정보
                    보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게
                    되었을 때에는 지체없이 해당 개인정보를 파기합니다. ②
                    정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
                    처리목적이 달성되었음에도 불구하고 다른 법령에 따라
                    개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를
                    별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여
                    보존합니다. 1. 법령 근거 : 2. 보존하는 개인정보 항목 :
                    계좌정보, 거래날짜 ③ 개인정보 파기의 절차 및 방법은 다음과
                    같습니다. 1. 파기절차 &lt; JJanhae &gt; 은(는) 파기 사유가
                    발생한 개인정보를 선정하고, &lt; JJanhae &gt; 의 개인정보
                    보호책임자의 승인을 받아 개인정보를 파기합니다.
                    제8조(개인정보의 안전성 확보 조치) &lt; JJanhae &gt;은(는)
                    개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
                    있습니다. 1. 정기적인 자체 감사 실시 개인정보 취급 관련
                    안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고
                    있습니다. 제9조(개인정보 자동 수집 장치의 설치•운영 및
                    거부에 관한 사항) ① JJanhae 은(는) 이용자에게 개별적인
                    맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로
                    불러오는 ‘쿠키(cookie)’를 사용합니다. ② 쿠키는 웹사이트를
                    운영하는데 이용되는 서버(http)가 이용자의 컴퓨터
                    브라우저에게 보내는 소량의 정보이며 이용자들의 PC 컴퓨터내의
                    하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적 :
                    이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및
                    이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
                    이용자에게 최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의
                    설치•운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷
                    옵션&gt;개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할
                    수 있습니다. 다. 쿠키 저장을 거부할 경우 맞춤형 서비스
                    이용에 어려움이 발생할 수 있습니다. 제10조 (개인정보
                    보호책임자) ① JJanhae 은(는) 개인정보 처리에 관한 업무를
                    총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
                    불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보
                    보호책임자를 지정하고 있습니다. ▶ 개인정보 보호책임자 성명
                    :유소연 연락처 : thdalstn6352@naver.com ※ 개인정보 보호
                    담당부서로 연결됩니다. ▶ 개인정보 보호 담당부서 부서명 :
                    담당자 :송민수 연락처 :thdalstn6352@naver.com ②
                    정보주체께서는 JJanhae 의 서비스(또는 사업)을 이용하시면서
                    발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에
                    관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수
                    있습니다. JJanhae 은(는) 정보주체의 문의에 대해 지체 없이
                    답변 및 처리해드릴 것입니다. 제11조(개인정보 열람청구)
                    정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람
                    청구를 아래의 부서에 할 수 있습니다. &lt; JJanhae &gt;은(는)
                    정보주체의 개인정보 열람청구가 신속하게 처리되도록
                    노력하겠습니다. ▶ 개인정보 열람청구 접수·처리 부서 담당자
                    :송민수 연락처 :thdalstn6352@naver.com 제12조(권익침해
                    구제방법) 정보주체는 개인정보침해로 인한 구제를 받기 위하여
                    개인정보분쟁조정위원회, 한국인터넷진흥원
                    개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                    있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는
                    아래의 기관에 문의하시기 바랍니다. 1. 개인정보분쟁조정위원회
                    : (국번없이) 1833-6972 (www.kopico.go.kr) 2.
                    개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)
                    3. 대검찰청 : (국번없이) 1301 (www.spo.go.kr) 4. 경찰청 :
                    (국번없이) 182 (ecrm.cyber.go.kr)
                    「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
                    정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한
                    요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로
                    인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는
                    바에 따라 행정심판을 청구할 수 있습니다. ※ 행정심판에 대해
                    자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
                    홈페이지를 참고하시기 바랍니다. 제13조(개인정보 처리방침
                    변경) ① 이 개인정보처리방침은 2022년 1월 1부터 적용됩니다. ②
                    이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.nextBtns}>
              <button
                className={
                  !confirm
                    ? `${styles.nextBtn} ${styles.disabled}`
                    : styles.nextBtn
                }
                type="button"
                disabled={!confirm}
                onClick={handleClick}
              >
                다음
              </button>
            </div>
          </form>
        </div>
      </article>
    </main>
  );
};

export default CheckTOS;