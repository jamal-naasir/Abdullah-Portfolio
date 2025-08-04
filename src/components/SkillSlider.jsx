import { FaNodeJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiWebpack, SiBabel, SiMongodb, SiExpress, SiPhp, SiLaravel, SiNextdotjs, SiDocker, SiSelenium, SiJest, SiTableau, SiWordpress, SiSquarespace, SiMui } from 'react-icons/si';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const skills = [
  // MERN
  { name: 'MongoDB', icon: <SiMongodb size={60} color="#47A248" /> },
  { name: 'Express.js', icon: <SiExpress size={60} color="#fff" /> },
  { name: 'React', icon: <FaReact size={60} color="#61dafb" /> },
  { name: 'TypeScript', icon: <SiTypescript size={60} color="#3178c6" /> },
  { name: 'Node.js', icon: <FaNodeJs size={60} color="#3c873a" /> },
  // PHP & Laravel
  { name: 'PHP', icon: <SiPhp size={60} color="#777bb4" /> },
  { name: 'Laravel', icon: <SiLaravel size={60} color="#ff2d20" /> },
  // Next.js & Nest.js
  { name: 'Next.js', icon: <SiNextdotjs size={60} color="#fff" /> },
  { name: 'Nest Js', icon: <SiNestjs size={60} color="#ea2845" /> },
  // Docker
  { name: 'Docker', icon: <SiDocker size={60} color="#2496ed" /> },
  // Selenium & Jest
  { name: 'Selenium', icon: <SiSelenium size={60} color="#43b02a" /> },
  { name: 'Jest', icon: <SiJest size={60} color="#c21325" /> },
  // Data Analytics
  { name: 'Analytics', icon: <SiTableau size={60} color="#e97627" /> },
  // WordPress, SquareSpace, Bubble.io
  { name: 'WordPress', icon: <SiWordpress size={60} color="#21759b" /> },
  { name: 'SquareSpace', icon: <SiSquarespace size={60} color="#222" /> },
  { name: 'Bubble.io', icon: (
    <img
      src="/assets/bubble.webp"
      alt="Bubble.io"
      style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: '12px', background: '#fff' }}
    />
  ) },
  // AI Recommendation Systems & Chatbots
  { name: 'Ollama', icon: (
    <img
      src="/assets/ollama.webp"
      alt="Ollama"
      style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: '12px', background: '#fff' }}
    />
  ) },
  { name: 'Chatbots', icon: <span style={{fontSize:60, color:'#f59e42'}}>🤖</span> },
  // Material UI
  { name: 'Material UI', icon: <SiMui size={60} color="#007fff" /> },
  // Webpack, Babel, Git
  { name: 'Webpack', icon: <SiWebpack size={60} color="#8ed6fb" /> },
  { name: 'Babel', icon: <SiBabel size={60} color="#f9dc3e" /> },
  { name: 'Git', icon: <FaGitAlt size={60} color="#f34f29" /> },
];

export default function SkillSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-6xl pl-2 md:pl-8 py-8">
      <div className="flex justify-between items-center mb-6">
        {/* <button ref={prevRef} className="swiper-button-prev text-2xl text-purple-400 hover:text-purple-200 transition-colors">&#8592;</button> */}
        <h2 className="head-text">Skills</h2>
        {/* <button ref={nextRef} className="swiper-button-next text-2xl text-purple-400 hover:text-purple-200 transition-colors">&#8594;</button> */}
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        onInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
      >
        {skills.map((skill, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#1e1e1e] rounded-lg shadow-md flex flex-col items-center justify-center p-8 min-h-[160px] hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-[60px] h-[60px] mb-2">
                {typeof skill.icon === 'string' || skill.icon?.type === 'span' ? (
                  <span style={{ fontSize: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60 }}>
                    {skill.icon.props ? skill.icon.props.children : skill.icon}
                  </span>
                ) : (
                  skill.icon
                )}
              </div>
              <p className="text-white mt-2 text-base font-semibold text-center">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
