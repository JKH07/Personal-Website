
import { Card } from "flowbite-react";


export  function AboutCard() {
 return(
        <div className="flex mt-10 items-center">
        <Card
      className="max-w-sm ml-5"
      imgAlt="alt"
      imgSrc="212.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Semicolon CTF
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Participated in Lebanon's largest CTF. Attended workshops and gained alot of insight about cybersecurity tools like KaliLinux etc.
      </p>
    </Card>
    <Card
      className="max-w-sm ml-5"
      imgAlt="alt"
      imgSrc="229.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Cybersecurity Day
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Attended Cybersecurity Day at LU. Listened to several senior cybersecurity reasearcher's expereince and advice.
      </p>
    </Card>
    <Card
      className="max-w-sm ml-5"
      imgAlt="alt"
      imgSrc="/images/blog/image-1.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        React Internship-IDS Fintech
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Participated in a 2 month frontend react internship. Gained hands-on experience with company-scale websites.
      </p>
    </Card>
    </div>
  )
}
