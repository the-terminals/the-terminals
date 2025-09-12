import { ArrowLeft, Clock, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import courseArabicImage from "@/assets/course-arabic.jpg";
import courseRiyadImage from "@/assets/course-riyad.jpg";
import courseEconomicsImage from "@/assets/course-economics.jpg";
import courseProphetsImage from "@/assets/course-prophets.jpg";
import islamicBookImage from "@/assets/islamic-book.jpg";

const ExploreKnowledge = () => {
  const courses = [
    {
      id: 1,
      title: "কুরআনিক আরবি ভাষা পরিচিতি",
      instructor: "ড. আবু আমিনাহ বিলাল ফিলিপ্স",
      duration: "১২ সপ্তাহ",
      topics: ["আরবি বর্ণমালা", "মৌলিক ব্যাকরণ", "কুরআনের শব্দভাণ্ডার", "সহজ আয়াতের অনুবাদ"],
      image: courseArabicImage,
    },
    {
      id: 2,
      title: "রিয়াদুস সালিহীন অধ্যয়ন",
      instructor: "শাইখ আব্দুর রাযযাক আল-বাদর",
      duration: "১৮ সপ্তাহ",
      topics: ["ইখলাস (নিষ্ঠা)", "তাওবা", "সবর (ধৈর্য)", "আদব (শিষ্টাচার)"],
      image: courseRiyadImage,
    },
    {
      id: 3,
      title: "ইসলামী অর্থনীতির মূলনীতি",
      instructor: "ড. মুহাম্মদ নেজাতুল্লাহ সিদ্দিকী",
      duration: "১০ সপ্তাহ",
      topics: ["রিবা মুক্ত লেনদেন", "যাকাত ব্যবস্থাপনা", "ইসলামী ব্যাংকিং", "নৈতিক বিনিয়োগ"],
      image: courseEconomicsImage,
    },
    {
      id: 4,
      title: "নবীদের কাহিনী: জীবন থেকে শিক্ষা",
      instructor: "শাইখ ওমর সুলেমান",
      duration: "১৫ সপ্তাহ",
      topics: ["আদম (আ.) এর পরীক্ষা", "ইব্রাহিম (আ.) এর ত্যাগ", "মূসা (আ.) এর সংগ্রাম", "মুহাম্মদ (ﷺ) এর দাওয়াত"],
      image: courseProphetsImage,
    },
  ];

  const books = [
    { id: 1, title: "তাফসীর : তাওযীহুল কুরআন", author: "আল্লামা মুহাম্মদ তাকী উসমানী" },
    { id: 2, title: "হাদীস : রিয়াদুস সালেহীন", author: "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী" },
    { id: 3, title: "সীরাত : সীরাহ - রেইনড্রপস", author: "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর" },
    { id: 4, title: "নবিদের কাহিনি (১,২)", author: "মুহাম্মদ আসাদুল্লাহ আল-গালিব" },
    { id: 5, title: "আসহাবে রাসূলের জীবনকথা", author: "ড. মুহাম্মদ আবদুল মা'বুদ" },
    { id: 6, title: "সংগ্রামী সাধকদের ইতিহাস", author: "সাইয়েদ আবুল হাসান আলী নদভী" },
    { id: 7, title: "ইসলামের বুনিয়াদী শিক্ষা", author: "সাইয়েদ আবুল আ'লা মওদুদী" },
    { id: 8, title: "ঈমান সবার আগে", author: "মাওলানা মুহাম্মদ আবদুল মালেক" },
    { id: 9, title: "আকীদা : ইসলামী আকীদা", author: "ড. খোন্দকার আবদুল্লাহ জাহাঙ্গীর" },
    { id: 10, title: "ফিকহ : আহকামে যিন্দেগী", author: "মাওলানা মুহাম্মদ হেমায়েত উদ্দিন" },
    { id: 11, title: "ইসলামী জীবনব্যবস্থা", author: "মুফতি তারেকুজ্জামান" },
    { id: 12, title: "ইসলামে হালাল-হারামের বিধান", author: "আল্লামা ইউসুফ আল কারযাভী" },
    { id: 13, title: "কবীরা গুনাহ", author: "ইমাম শামসুদ্দিন আয্-যাহাবী" },
    { id: 14, title: "ইসলামী শরীয়াতের উৎস", author: "মওলানা মুহাম্মদ আবদুর রহীম" },
    { id: 15, title: "মতবিরোধপূর্ণ বিষয়ে সঠিক পন্থা অবলম্বনের উপায়", author: "শাহ্ ওয়ালিউল্লাহ দেহলভী" },
    { id: 16, title: "ইসলাম ও রাজনীতি", author: "আল্লামা মুহাম্মদ তাকী উসমানী" },
    { id: 17, title: "ইসলামী রাষ্ট্র ও সংবিধান", author: "সাইয়েদ আবুল আ'লা মওদুদী" },
    { id: 18, title: "আধুনিক যুগ ইসলাম: কৌশল ও কর্মসূচী", author: "আল্লামা ইউসুফ আল কারযাভী" },
    { id: 19, title: "ইসলামের অর্থনীতি", author: "মওলানা মুহাম্মদ আবদুর রহীম" },
    { id: 20, title: "মুমিনের পারিবারিক জীবন", author: "অধ্যাপক মুহাম্মদ ইউসুফ আলী" },
    { id: 21, title: "আদাবে জিন্দেগী", author: "আল্লামা ইউসুফ ইসলাহী" },
    { id: 22, title: "রাহে বেলায়েত", author: "ড. খোন্দকার আবদুল্লাহ জাহাঙ্গীর" },
    { id: 23, title: "এহইয়াউস সুনান", author: "ড. খোন্দকার আবদুল্লাহ জাহাঙ্গীর" },
    { id: 24, title: "প্রচলিত ভুল", author: "মাওলানা মুহাম্মদ আবদুল মালেক" },
    { id: 25, title: "হাদীসের নামে জালিয়াতি", author: "ড. খোন্দকার আবদুল্লাহ জাহাঙ্গীর" },
    { id: 26, title: "ইসলামী সমাজ বিপ্লবের ধারা", author: "সাইয়েদ কুতুব" },
    { id: 27, title: "ইসলামী বিপ্লব : পথ ও পদ্ধতি", author: "আহমদ আবদুল কাদের" },
    { id: 28, title: "মুসলিম উম্মাহর পতনে বিশ্বের কি ক্ষতি হলো", author: "সাইয়েদ আবুল হাসান আলী নদভী" },
    { id: 29, title: "ইতিহাসের আয়নায় বর্তমান বিশ্বব্যবস্থা", author: "হেদায়াতুল্লাহ মেহমান্দ" },
    { id: 30, title: "মুসলিম বিশ্বে ইসলাম ও পাশ্চাত্য সভ্যতার দ্বন্দ্ব", author: "সাইয়েদ আবুল হাসান আলী নদভী" },
    { id: 31, title: "শিক্ষা সাহিত্য ও সংস্কৃতি", author: "মওলানা মুহাম্মদ আবদুর রহীম" },
    { id: 32, title: "মুসলিম সংস্কৃতি ও বাঙালি মুসলমান", author: "ফাহমিদ-উর-রহমান" },
    { id: 33, title: "প্রোডাক্টিভ মুসলিম", author: "মোহাম্মদ ফারিস" },
    { id: 34, title: "দা ডিভাইন রিয়ালিটি", author: "হামজা জর্জিস" },
    { id: 35, title: "অবাধ্যতার ইতিহাস", author: "ডা. শামসুল আরেফীন" },
    { id: 36, title: "ইসলাম ও পাশ্চাত্য সভ্যতার দ্বন্দ্ব", author: "সাইয়েদ আবুল আ'লা মওদুদী" },
    { id: 37, title: "বিংশ শতাব্দীর জাহেলিয়াত", author: "মুহাম্মদ কুতুব" },
    { id: 38, title: "ইসলাম ও আধুনিকতা", author: "আল্লামা মুহাম্মদ তাকী উসমানী" },
    { id: 39, title: "ভ্রান্তির বেড়াজালে ইসলাম", author: "মুহাম্মদ কুতুব" },
    { id: 40, title: "ইসলাম ও অন্যান্য মতবাদ", author: "ড. মুহাম্মদ নুরুল ইসলাম" },
    { id: 41, title: "সুবহে সাদিক", author: "খুররম জাহ মুরাদ" },
    { id: 42, title: "কিতাবুয যুহদ", author: "ইমাম আহমাদ ইবনু হাম্বাল" },
    { id: 43, title: "রুহের চিকিৎসা", author: "ইমাম ইবনে তাইমিয়া" },
    { id: 44, title: "মুক্ত বাতাসের খোঁজে", author: "লস্ট মডেস্টি" },
    { id: 45, title: "পরকাল", author: "ড. মুহাম্মদ ইবনে আবদুর রহমান আরিফী" },
    { id: 46, title: "মহাপ্রলয়", author: "ড. মুহাম্মদ ইবনে আবদুর রহমান আরিফী" },
    { id: 47, title: "বাংলার মুসলমানদের ইতিহাস", author: "আব্বাস আলী খান" },
    { id: 48, title: "লস্ট ইসলামিক হিস্ট্রি", author: "ফিরাস আল খতিব" },
    { id: 49, title: "আগামী দিনের সভ্যতা ইসলাম", author: "আল্লামা ইউসুফ আল কারযাভী" },
    { id: 50, title: "ইসলাম সভ্যতার শেষ ঠিকানা", author: "জিয়াউল হক" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with back button */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Knowledge <span className="text-primary">Sharing</span>
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Explore our comprehensive collection of courses and books
              </p>
            </div>
          </div>

          {/* Courses Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Courses
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="interactive-card group border-0 shadow-elegant overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span className="line-clamp-1">{course.instructor}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{course.duration}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.topics.slice(0, 2).map((topic, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.topics.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Books Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Books Collection
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {books.map((book) => (
                <Card key={book.id} className="interactive-card group border-0 shadow-elegant overflow-hidden">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img 
                      src={islamicBookImage} 
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-1">
                        {book.author}
                      </p>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExploreKnowledge;