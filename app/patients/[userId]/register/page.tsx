import RegisterForm from "@/components/form/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto mx-auto">
        <div className="sub-container max-w-[500px]">
          <Image
            src="/assets/health-logo.jpg"
            alt="patient"
            height={1000}
            width={1000}
            className="mb-5 h-13 w-fit rounded-lg"
          />
          <RegisterForm user={user} />
          <div className="text-14-regular mt-13 flex justify-between ">
            <p className="flex justify-items-end text-[#76828D] xl:text-left">
              © 2025 MedCare
            </p>
            <Link href="/?admin-true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
