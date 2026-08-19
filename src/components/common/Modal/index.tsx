import { LEGAL_LINKS } from "@/lib/legal";
import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 제출은 이 모달이 감싸인 form 의 submit 버튼이 담당한다. 폼 밖으로 옮기면 배선이 끊긴다.
const Modal = ({ isOpen, onClose }: ModalProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // 열릴 때 포커스를 다이얼로그로 들이고 배경 스크롤을 잠근다.
    cardRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        ref={cardRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-title"
        className="max-h-[90vh] overflow-y-auto rounded-lg bg-white px-20 py-10 text-black shadow-lg md:w-[300px] md:px-8 md:text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="consent-title" className="mb-5 text-xl font-bold">
          개인정보 수집 이용에 대한 안내
        </h2>
        {/* 폼 필드를 추가·삭제하면 아래 고지 항목도 함께 고쳐야 한다 */}
        <div className="mb-5">
          <p>1. 수집하는 개인정보의 항목</p>
          <p>
            이름, 전화번호, 이메일, 상호명, 사업장 주소, 문의 단계, 베이 수,
            운영 연차, 문의 내용
          </p>
        </div>
        <div className="mb-5">
          <p>2. 개인정보의 수집 및 이용목적</p>
          <p>
            - 이름: 서비스 이용에 대한 견적 및 상담 진행을 위한 기본적인 대상자
            정보
          </p>
          <p>
            - 전화번호/이메일: 문의 사항에 대한 답변을 전달하기 위한 원활한 의사
            소통 경로의 확보
          </p>
          <p>
            - 상호명/사업장 주소/문의 단계/베이 수/운영 연차: 매장 환경에 맞는
            견적과 상담 내용을 준비하기 위한 정보
          </p>
          <p>- 문의 내용: 문의하신 사항의 확인과 답변</p>
        </div>
        <div className="mb-10">
          <p>3. 개인정보의 보유 및 이용기간</p>
          <p>
            원칙적으로 개인정보의 수집 또는 제공받은 목적 달성 시 지체없이
            파기합니다.
            <br />
            단, 수집목적 및 제공받은 목적이 달성된 경우에도 법률의 규정에 의하여
            보존할 필요성이 있는 경우에는
            <br />
            법률의 규정에 따라 고객의 개인정보를 보유할 수 있습니다.
          </p>
          <p className="mt-3">- 계약 또는 청약철회 등에 관한 기록: 5년</p>
          <p>- 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
          <p>- 소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년 등</p>
        </div>
        <div className="mb-10">
          <p>4. 동의를 거부할 권리</p>
          <p>
            위 개인정보 수집·이용에 동의하지 않으실 수 있습니다.
            <br />
            다만 동의하지 않으시는 경우 상담 접수와 회신이 제한됩니다.
          </p>
          <p className="mt-3">
            자세한 내용은{" "}
            <a
              href={LEGAL_LINKS.privacy}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-main"
            >
              개인정보 처리방침
            </a>
            에서 확인하실 수 있습니다.
          </p>
        </div>
        <div className="flex w-full justify-center gap-10 md:gap-5">
          <button
            className="rounded bg-main px-32 py-2 text-white transition hover:brightness-110 md:px-8"
            type="submit"
          >
            문의하기
          </button>
          <button
            className="rounded border border-black px-32 py-2 md:px-8"
            type="button"
            onClick={onClose}
          >
            취소하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
