"use client";

import { RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "@/components/common/Modal";
import { track } from "@/lib/analytics";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.current !== null &&
      serviceID !== undefined &&
      templateID !== undefined &&
      publicKey !== undefined
    ) {
      emailjs.sendForm(serviceID, templateID, form.current, { publicKey }).then(
        () => {
          (e.target as HTMLFormElement).reset();
          setModalOpen(false);
          track("lead_submit", { source: "contact_form", status: "success" });
          alert("문의가 성공적으로 전송되었습니다.");
        },
        (error) => {
          console.error("contact submit failed", error);
          track("lead_submit", { source: "contact_form", status: "fail" });
          alert("문의 전송에 실패했습니다. 다시 시도해주세요.");
        },
      );
    } else {
      alert("문의 전송에 실패했습니다. 다시 시도해주세요...");
    }
  };

  const onClickContactBtn = () => {
    if (form.current) {
      const required = ["name", "phone"];
      const elements = form.current.elements;
      const missing = required.find((n) => {
        const el = elements.namedItem(n) as HTMLInputElement | null;
        return !el || el.value.trim() === "";
      });
      if (!missing) {
        track("lead_cta_click", { source: "contact_form_submit_open" });
        setModalOpen(true);
      } else {
        alert("이름과 연락처는 필수 항목입니다.");
      }
    }
  };

  return (
    <section
      className="my-0 flex size-full flex-col items-center gap-20 bg-gradient-to-t from-lightPrimary to-white px-36 text-black xl:px-10 md:mt-0 md:px-0 md:pt-20"
      aria-labelledby="contact-heading"
    >
      <div className="flex size-full py-20 pb-10 lg:flex-col md:flex-col">
        <div className="mt-44 flex flex-[2] flex-col items-start gap-4 text-2xl font-semibold lg:items-start md:mt-0 md:px-6">
          <h2
            id="contact-heading"
            className="ml-20 break-keep text-3xl font-bold md:ml-0 md:text-2xl"
          >
            세차장 컨설팅 무료 상담
          </h2>
          <p className="ml-20 mr-20 text-base font-normal leading-[26px] text-gray md:mx-0 md:text-sm">
            창업·리모델링·시스템 도입·운영 어떤 단계든 워시펀 팀이 함께합니다.
            <br className="md:hidden" />
            아래 폼에 이름과 연락처만 남겨주시면 1영업일 내 연락드립니다.
          </p>
          <div className="ml-20 mt-2 flex flex-col gap-1 text-base font-normal text-gray md:ml-0 md:text-sm">
            <a
              href="tel:+82-70-8806-8088"
              className="underline"
              onClick={() =>
                track("lead_cta_click", { source: "contact_page_tel" })
              }
            >
              ☎ 070-8806-8088
            </a>
            <a
              href="mailto:contact@washfun.fun"
              className="underline"
              onClick={() =>
                track("lead_cta_click", { source: "contact_page_email" })
              }
            >
              ✉ contact@washfun.fun
            </a>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-[3] p-32 2xl:p-10 md:mt-20 md:justify-center md:p-0"
        >
          <div className="flex md:flex-col md:gap-6">
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-name" className="sr-only">
                이름
              </label>
              <input
                id="contact-name"
                className="h-9 w-full rounded-md border border-lightGray pl-5 outline-none placeholder:text-sm focus:border-primary focus:outline-none"
                type="text"
                name="name"
                placeholder="이름 (필수)"
                required
                autoComplete="name"
              />
            </div>
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-phone" className="sr-only">
                전화번호
              </label>
              <input
                id="contact-phone"
                className="h-9 w-full rounded-md border border-lightGray pl-5 placeholder:text-sm focus:border-primary focus:outline-none"
                type="tel"
                name="phone"
                placeholder="연락처 (필수)"
                required
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="mt-6 flex md:flex-col md:gap-6">
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-email" className="sr-only">
                이메일
              </label>
              <input
                id="contact-email"
                className="h-9 w-full rounded-md border border-lightGray pl-5 outline-none placeholder:text-sm focus:border-primary focus:outline-none"
                type="email"
                name="email"
                placeholder="이메일 (선택)"
                autoComplete="email"
              />
            </div>
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-store" className="sr-only">
                상호명
              </label>
              <input
                id="contact-store"
                className="h-9 w-full rounded-md border border-lightGray pl-5 outline-none placeholder:text-sm focus:border-primary focus:outline-none"
                type="text"
                name="store_name"
                placeholder="상호명 (선택)"
              />
            </div>
          </div>
          <div className="mt-6 flex md:flex-col md:gap-6">
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-address" className="sr-only">
                사업장 주소
              </label>
              <input
                id="contact-address"
                className="h-9 w-full rounded-md border border-lightGray pl-5 outline-none placeholder:text-sm focus:border-primary focus:outline-none"
                type="text"
                name="address"
                placeholder="사업장 주소 (선택)"
              />
            </div>
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-stage" className="sr-only">
                문의 단계
              </label>
              <select
                id="contact-stage"
                name="stage"
                defaultValue=""
                className="h-9 w-full rounded-md border border-lightGray bg-white pl-4 text-sm placeholder:text-sm focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  문의 단계 선택 (선택)
                </option>
                <option value="start-business">세차장 창업·개업 검토</option>
                <option value="remodeling">기존 매장 리모델링</option>
                <option value="system">시스템 도입</option>
                <option value="operations">운영 컨설팅</option>
                <option value="etc">기타</option>
              </select>
            </div>
          </div>
          <div className="mt-6 flex md:flex-col md:gap-6">
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-bay" className="sr-only">
                베이 수
              </label>
              <input
                id="contact-bay"
                className="h-9 w-full rounded-md border border-lightGray pl-5 outline-none placeholder:text-sm focus:border-primary focus:outline-none"
                type="text"
                name="bay"
                placeholder="베이 수 (선택)"
              />
            </div>
            <div className="mx-10 flex min-w-0 flex-1 flex-col">
              <label htmlFor="contact-year" className="sr-only">
                운영 연차
              </label>
              <input
                id="contact-year"
                className="h-9 w-full rounded-md border border-lightGray pl-5 outline-none placeholder:text-sm focus:border-primary focus:outline-none"
                type="text"
                name="year"
                placeholder="운영 연차 (선택)"
              />
            </div>
          </div>
          <div className="mt-6 flex">
            <div className="mx-10 flex flex-1 flex-col">
              <label htmlFor="contact-content" className="mb-4 pl-2">
                문의 사항 (선택)
              </label>
              <textarea
                id="contact-content"
                className="h-44 w-full resize-none rounded-md border border-lightGray py-2 pl-5 outline-none focus:border-primary focus:outline-none"
                name="content"
                placeholder="궁금하신 내용을 자유롭게 적어주세요. 예: 신규 창업 검토 중인데 예상 비용이 궁금합니다."
              />
            </div>
          </div>
          <div className="flex cursor-pointer justify-end">
            <button
              type="button"
              onClick={onClickContactBtn}
              className="mx-10 mt-6 w-36 cursor-pointer rounded-md bg-main p-2 text-center text-base text-white transition hover:brightness-110 transition hover:opacity-100"
              aria-label="워시펀 컨설팅 문의 보내기"
            >
              문의하기
            </button>
          </div>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
