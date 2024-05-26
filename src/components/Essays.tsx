import Ideathon from "../assets/Ideathon.jpg";
import GEIW from "../assets/Haitam_GEIW_Essay.pdf";
import EN_Essay from "../assets/EN_Essay.pdf";
import EN from "../assets/english.jpg";

export default function Essays() {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-24">
      <h2 className="mb-10 text-3xl font-bold text-[#576ee0] md:text-4xl">
        My Essays
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <img
            alt="Ideathon"
            className="object-cover w-full h-48"
            src={Ideathon}
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
              height: 300,
            }}
            width={500}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl text-[#576ee0]">
              3rd place in Ideathon GEIW-2024
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400" style={{
                maxWidth: "480px",
            }}>
                Our team secured 3rd place in the Ideathon at the Global
                Entrepreneurship and Innovation Week 2024.
            </p>
            <div className="mt-4 flex justify-end">
              <a className="inline-flex items-center justify-center rounded-md bg-[#576ee0] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4a5dbb] focus:outline-none focus:ring-2 focus:ring-[#576ee0] focus:ring-offset-2 dark:focus:ring-offset-gray-950"
                href={GEIW}
                target="_blank"
              >
                Read the Essay
              </a>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
          <img
            alt="English"
            className="object-cover w-full h-48"
            src={EN}
            style={{
              aspectRatio: "500/300",
              objectFit: "cover",
              height: 300,
            }}
            width={500}
          />
          <div className="bg-white p-4 dark:bg-gray-950">
            <h3 className="font-bold text-xl text-[#576ee0]" style={{
                maxWidth: "430px",
            }}>
            Mastering Professional Communication for Career Success
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400" style={{
                maxWidth: "480px",
            }}>
                Discovring the importance of mastering professional communication skills for career success.
            </p>
            <div className="mt-4 flex justify-end">
              <a className="inline-flex items-center justify-center rounded-md bg-[#576ee0] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4a5dbb] focus:outline-none focus:ring-2 focus:ring-[#576ee0] focus:ring-offset-2 dark:focus:ring-offset-gray-950"
                href={EN_Essay}
                target="_blank"
              >
                Read the Essay
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
