import { Clock, User, BookOpen, Play } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Import images
import courseMarriageImage from "@/assets/course-marriage.png";
import courseTimeImage from "@/assets/course-time.png";
import courseFinanceImage from "@/assets/course-finance.png";
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
      title: "Marriage Preparation (Male)",
      instructor: "Shamsul Arefin",
      totalClasses: "১৮ টি",
      image: courseMarriageImage,
      badge: "Pre-Marriage",
    },
    {
      id: 2,
      title: "Time Management",
      instructor: "Academy Authority",
      totalClasses: "২৪ টি",
      image: courseTimeImage,
      badge: "Productivity",
    },
    {
      id: 3,
      title: "Introduction to Islamic Finance and Economics",
      instructor: "Aslaf Academy",
      totalClasses: "৫৭ টি",
      image: courseFinanceImage,
      badge: "Finance",
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
            <div className="p-2 rounded-lg bg-primary/10">
              <Play className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground">
              Featured Courses
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className="group border-0 shadow-elegant overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 bg-card"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {course.badge}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Play className="h-4 w-4 fill-current" />
                      <span>মোট ক্লাস: {course.totalClasses}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    View Course
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
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
