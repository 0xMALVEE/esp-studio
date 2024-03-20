import { source } from "@/helpers/source";
import { useLocale } from "@/hooks/useLocale";

export function AboutScreenFa() {
  return (
    <div>
      <h1>نرم افزار ESP-Studio</h1>
      <p>این نرم افزار برای انجام پروژه های اینترنت اشیا طراحی شده است.</p>

      <p>نویسنده:‌ علی ترابی</p>
      <a href="https://torabian.github.io" target="_blank">
        https://torabian.github.io
      </a>

      <h2>دانلود برای ESP</h2>
      <p>
        شما میتوانید فایل های نصبی این پروژه را برای برد های ESP از طریق لینک
        زیر دانلود کنید:
      </p>
      <a href="https://github.com/torabian/esp-studio" target="_blank">
        https://github.com/torabian/esp-studio
      </a>
    </div>
  );
}

export function AboutScreenEn() {
  return (
    <div>
      <h1>ESP-Studio</h1>
      <p>
        This is an IOT dashboard, which meant to be installed on ESP32 series,
        which have wifi and 4MB of flash memory at least.
      </p>

      <h2>Download ESP Binaries </h2>
      <p>You can download the binaries for flashing into device from here:</p>
      <a href="https://github.com/torabian/esp-studio" target="_blank">
        https://github.com/torabian/esp-studio
      </a>

      <p>Author: Ali Torabi</p>
      <a href="https://torabian.github.io" target="_blank">
        https://torabian.github.io
      </a>
    </div>
  );
}

export function AboutScreen() {
  const { locale } = useLocale();
  return <div>{locale === "fa" ? <AboutScreenFa /> : <AboutScreenEn />}</div>;
}
