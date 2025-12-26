import { Clock, User, BookOpen } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Import images
import courseArabicImage from "@/assets/course-arabic.jpg";
import courseRiyadImage from "@/assets/course-riyad.jpg";
import courseEconomicsImage from "@/assets/course-economics.jpg";
import courseProphetsImage from "@/assets/course-prophets.jpg";
import bookQuranImage from "@/assets/book-quran.jpg";
import bookHadithImage from "@/assets/book-hadith.jpg";
import bookSirahImage from "@/assets/book-sirah.jpg";
import bookFiqhImage from "@/assets/book-fiqh.jpg";
import bookAqeedahImage from "@/assets/book-aqeedah.jpg";
import bookEthicsImage from "@/assets/book-ethics.jpg";
import bookHistoryImage from "@/assets/book-history.jpg";
import bookSpiritualityImage from "@/assets/book-spirituality.jpg";

const KnowledgeSection = () => {
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

  const bookImages = [
    bookQuranImage, bookHadithImage, bookSirahImage, bookFiqhImage,
    bookAqeedahImage, bookEthicsImage, bookHistoryImage, bookSpiritualityImage
  ];

  const getBookImage = (index: number) => {
    return bookImages[index % bookImages.length];
  };

  const books = [
    { id: 1, title: "তাফসীর : তাওযীহুল কুরআন", author: "আল্লামা মুহাম্মদ তাকী উসমানী" },
    { id: 2, title: "হাদীস : রিয়াদুস সালেহীন", author: "ইমাম মুহিউদ্দীন ইয়াহইয়া আন-নববী" },
    { id: 3, title: "সীরাত : সীরাহ - রেইনড্রপস", author: "ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর" },
    { id: 4, title: "নবিদের কাহিনি (১,২)", author: "মুহাম্মদ আসাদুল্লাহ আল-গালিব" },
    { id: 5, title: "আসহাবে রাসূলের জীবনকথা", author: "ড. মুহাম্মদ আবদুল মা'বুদ" },
    { id: 6, title: "সংগ্রামী সাধকদের ইতিহাস", author: "সাইয়েদ আবুল হাসান আলী নদভী" },
    { id: 7, title: "ইসলামের বুনিয়াদী শিক্ষা", author: "সাইয়েদ আবুল আ'লা মওদুদী" },
    { id: 8, title: "ঈমান সবার আগে", author: "মাওলানা মুহাম্মদ আবদুল মালেক" },
  ];

  return (
    <section id="knowledge" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Knowledge <span className="text-primary">Sharing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of courses and books for Islamic education
          </p>
        </div>

        {/* Courses Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Courses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="group border-0 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <CardContent className="p-5">
                  <h4 className="text-base font-semibold text-foreground mb-2 line-clamp-2">
                    {course.title}
                  </h4>

                  <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                    <User className="h-3 w-3" />
                    <span className="line-clamp-1">{course.instructor}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 2).map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {course.topics.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.topics.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-display font-bold text-foreground">
              Books Collection
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {books.map((book, index) => (
              <Card key={book.id} className="group border-0 shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={getBookImage(index)}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white font-semibold text-xs mb-0.5 line-clamp-2">
                      {book.title}
                    </h4>
                    <p className="text-white/80 text-[10px] line-clamp-1">
                      {book.author}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <a href="/explore-knowledge">View All Books & Courses</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
