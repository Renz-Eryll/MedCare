import PatientForm from "@/components/form/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/health-logo.jpg"
            alt="patient"
            height={1000}
            width={1000}
            className="mb-12 h-13 w-fit rounded-xl"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between ">
            <p className="flex justify-items-end text-[#76828D] xl:text-left">
              © 2025 MedCare
            </p>
            <Link href="/?admin-true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/side.svg"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[50%] border-l-4 "
      />
    </div>
  );
}
