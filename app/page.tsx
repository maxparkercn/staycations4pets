"use client"

import { useState } from "react"
import Script from "next/script"
import {
  Star,
  MapPin,
  Dog,
  Home,
  X,
  CheckCircle,
  Clock,
  Award,
  Syringe,
  DollarSign,
  Shield,
  Calendar,
  MessageCircle,
} from "lucide-react"
import { Avatar } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showFullExperience, setShowFullExperience] = useState(false)
  const [showAllServices, setShowAllServices] = useState(false)
  const [showAllReviews, setShowAllReviews] = useState(false)

  const galleryImages = [
    { src: "/original2.webp", alt: "Ruth and Rachid with small dogs" },
    { src: "/original5.webp", alt: "Walking dogs by the lake" },
    { src: "/original3.webp", alt: "Rachid with white fluffy dog" },
    { src: "/original.webp", alt: "Playing with black and white cat" },
    { src: "/original4.webp", alt: "With black poodle and golden dog" },
    { src: "/rachid-with-white-dog.jpg", alt: "Rachid relaxing with white fluffy dog" },
    { src: "/dogs-at-lake.jpg", alt: "Dogs playing in the water at the lake" },
    { src: "/rachid-beach-walk.jpg", alt: "Rachid walking dog on the beach" },
    { src: "/rachid-grooming-cat.jpg", alt: "Rachid grooming black cat" },
    { src: "/rachid-with-corgi.jpg", alt: "Rachid with tan corgi outdoors" },
    { src: "/rachid-walking-dogs.jpg", alt: "Rachid walking two dogs in neighborhood" },
    { src: "/rachid-with-tan-dog.jpg", alt: "Rachid holding tan dog indoors" },
  ]

  const allReviews = [
    {
      name: "Tiffany B.",
      service: "Drop-In Visits",
      date: "Sep 27, 2025",
      text: "Ruth and Rachid were amazing cat sitters for our trip!!! Our cat Ryuji absolutely loved them and we will not hesitate to have them take care of her again in the future.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      name: "Danielle G.",
      service: "House Sitting",
      date: "Sep 08, 2025",
      text: "Thank you for taking wonderful care of our girl Ginny and our home. Our home was clean and respectfully kept, and our pup was given lots of attention and kindness. I appreciate the daily check in and pictures, it really helped bring piece of mind.",
      gradient: "from-green-400 to-teal-500",
    },
    {
      name: "Amanda H.",
      service: "House Sitting",
      date: "Jul 31, 2025",
      text: "Ruth was amazing with Fenton for the 5 days I was away on the other coast. He's very sound sensitive and requires daily medications which Ruth handled beautifully. She was very prompt in offering updates and keeping him on his typical home schedule. Ruth is warm and reliable; highly recommend her to house sit.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      name: "Claire C.",
      service: "House Sitting",
      date: "Jul 22, 2025",
      text: "Ruth and Rashid are really awesome to work with. They have sat for our pups multiple times at our home. They are super reliable, great to the dogs, excellent communicators, and very kind people!",
      gradient: "from-pink-400 to-purple-500",
    },
    {
      name: "Emily N.",
      service: "Dog Boarding",
      date: "Jul 20, 2025",
      text: "Ruth and Rachid took great care of our senior dog despite his recent injury that required mobility assistance. They also made sure he got all of his medications in a timely manner. We would definitely recommend them for any dog watching needs!",
      gradient: "from-indigo-400 to-blue-500",
    },
    {
      name: "Jennifer H.",
      service: "Drop-In Visits",
      date: "Jul 20, 2025",
      text: "Ruth and Rachid were wonderful with my cat. They were attentive and communicative and made me feel at ease during my time away!",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Megan & Alex W.",
      service: "Dog Boarding",
      date: "Jul 20, 2025",
      text: "Ruth and Rachid are a joy to work with - so kind, good with Maple, and great communicators. They were flexible when we ended up coming home from a trip early and wanted to pick Maple up a day earlier than planned!",
      gradient: "from-teal-400 to-green-500",
    },
    {
      name: "Mohan A.",
      service: "Dog Boarding",
      date: "Jul 07, 2025",
      text: "Ruth and Rachid were amazing! Answered questions quickly, kept me updated on my pup throughout the full stay and sent photos",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Rozie E.",
      service: "House Sitting",
      date: "Jun 30, 2025",
      text: "Ruth and Rachid were very accommodating and flexible with my pets' needs!",
      gradient: "from-red-400 to-orange-500",
    },
    {
      name: "Tracey G.",
      service: "Dog Boarding",
      date: "Jun 23, 2025",
      text: "Ruth and Rachid were fantastic with my Fiona. They made sure she got her walks and her rest! This was a last minute gig so double appreciation - ut made me rest easy at the big family event out of town",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "Calvin B.",
      service: "Dog Boarding",
      date: "Jun 23, 2025",
      text: "Ruth and Rachid were great with our pup! He seemed to have just as much fun while we were away as we did.",
      gradient: "from-lime-400 to-green-500",
    },
    {
      name: "Claire C.",
      service: "House Sitting",
      date: "Jun 16, 2025",
      text: "Ruth and Rachid are lovely!! Our dogs were well taken care of. Great communication, super flexible, and great with dogs.",
      gradient: "from-pink-400 to-purple-500",
    },
    {
      name: "Robin S.",
      service: "Doggy Day Care",
      date: "Jun 04, 2025",
      text: "As always, Ruth and Rachid provided wonderful care for our pup!🙏☺️",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      name: "Brandon H.",
      service: "Dog Boarding",
      date: "Jun 01, 2025",
      text: "Ruth and Rachid were great dog sitters for Rocky! It was our first time away from him and they loved and took great care of him. They asked lots of questions and made sure to spend time with him both on a visit and when we dropped him off so that he was comfortable with them. We were sent photos and never worried about him while we were away. They treated him with long walks and treats that we had okayed! He came home tired and happy.",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      name: "Robin S.",
      service: "Doggy Day Care",
      date: "May 05, 2025",
      text: "As always, Ruth and Rachid provided fun, safe, and loving care for our 9 month old pup Mabel- she always gets so excited when we get to your place! We're lucky to have found you both, thank you!",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      name: "Spencer M.",
      service: "Dog Boarding",
      date: "May 04, 2025",
      text: "Ruth and Rachid did an amazing job taking care of my dog and keeping her engaged while I was away on vacation! You can tell they care a lot about animals and that comes through in how they look after your pet. I received many photos of my dog's adventures while I was away so it made it easy to stay in the loop. I'll be booking them again in the future.",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      name: "Stephen & Carol Y.",
      service: "Dog Boarding",
      date: "Apr 27, 2025",
      text: "Thank you to Ruth and Rachid for taking good care of our sheltie, Theo. Throughout our trip we received photos and updates regarding Theo's daily experiences; many walks to the lake and throughout the neighborhood, diet, his new doggie friend, sleeping habits and his chronic skin condition. Communication was clear and regular so we were reassured that Theo was being well cared for. Theo usually doesn't get to sleep on the sofa at home, so I bet he felt like a king at Rachid and Ruth's home. Thank you Rachid and Ruth for taking great care of Theo, we appreciate all you did for him.",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      name: "Steve O.",
      service: "Dog Boarding",
      date: "Apr 02, 2025",
      text: "We couldn't have asked for a better pet sitter for our dog, Gus! Over nearly three weeks, they provided him with exceptional care, ensuring he felt loved and attended to every day. From frequent walks to thoughtful attention, it was clear they genuinely cared about Gus's happiness and well-being. We truly appreciated their dedication and would absolutely trust them with Gus again in the future!",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      name: "Robin S.",
      service: "Dog Boarding",
      date: "Mar 20, 2025",
      text: "These folks took the best care of our puppy! They were responsible and conscientious and caring, and gave her lots of love. They were very responsive to our concerns n general and also about leaving her for the first time for a few days and about her safety with the other dog they were watching. So we felt very comfortable leaving our puppy with the other dog who was older and who they knew well. The two dogs got along great. Ruth and Rachid were just overall very helpful and accommodating. We would not hesitate to ask them to watch Mabel in the future. Mabel was a happy pup when she got home. Thank you again!",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      name: "Zoe E.",
      service: "Dog Boarding",
      date: "Mar 17, 2025",
      text: "Appreciate these two so much! They're great.",
      gradient: "from-fuchsia-400 to-pink-500",
    },
    {
      name: "Brandi H.",
      service: "House Sitting",
      date: "Mar 16, 2025",
      text: "The greatest pet sitters on planet Earth! Ruth and Rachid take excellent care of Dougie and Roscoe while we are away, and we don't have to worry about a thing. I highly recommend these two!",
      gradient: "from-rose-400 to-red-500",
    },
    {
      name: "Robin S.",
      service: "Doggy Day Care",
      date: "Mar 08, 2025",
      text: "Thank you so much, Rachid. You were so great with 7 month old Mabel-she felt comfortable with you right away! Appreciated your understanding of and responsiveness to our concern for our puppy. A' Thanks again to you and Ruth for being available for us with a last minute request. We will see you again soon!",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      name: "Zoe E.",
      service: "Dog Boarding",
      date: "Mar 06, 2025",
      text: "Ruth and Rachid continue to be amazing sitters. Ellie always comes home happy and tired; I can't ask for anything else!",
      gradient: "from-fuchsia-400 to-pink-500",
    },
    {
      name: "Katie D.",
      service: "Dog Boarding",
      date: "Jan 06, 2025",
      text: "Rex had a wonderful holiday with Ruth and Rachid. This was his first multi-day stay with them, and I felt completely at ease, even with with a recent heard condition episode Rex had. They were communicative, attentive, and made sure he was comfortable. Thank you both!!",
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      name: "Laura K.",
      service: "House Sitting",
      date: "Dec 30, 2024",
      text: "Not only do you get competence and kindness with Ruth and Rachid, you get dog love and positivity! I would absolutely recommend them!",
      gradient: "from-indigo-400 to-violet-500",
    },
    {
      name: "Brooks H.",
      service: "Dog Boarding",
      date: "Dec 29, 2024",
      text: "Ruth and Rachid were fantastic, they took great care of our pup over the holidays and we won't hesitate to contact them again next time we need a sitter! They were super friendly and clearly cared a lot about our dog's wellbeing. From the photos they sent us while we were away it was very evident our pup was relaxed and well taken care of! 10/10!",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "Zoe E.",
      service: "Dog Boarding",
      date: "Dec 06, 2024",
      text: "Ruth & Rachid are the best. They're so communicative, flexible, and treated Ellie as their own. We will use them again and again!",
      gradient: "from-fuchsia-400 to-pink-500",
    },
    {
      name: "Megan & Alex W.",
      service: "Dog Boarding",
      date: "Nov 21, 2024",
      text: "Ruth and Rachid were awesome. They were so active with Maple in such a walkable neighborhood. Maple was EXHAUSTED when she got home with all the walks and play time. Will definitely be booking again :)",
      gradient: "from-teal-400 to-green-500",
    },
    {
      name: "Katie D.",
      service: "Doggy Day Care",
      date: "Nov 20, 2024",
      text: "Rex had a great time with Rachid and Ruth. He got MANY walks and was happy and content when he came home!",
      gradient: "from-cyan-400 to-teal-500",
    },
    {
      name: "Brandi H.",
      service: "House Sitting",
      date: "Nov 12, 2024",
      text: "Ruth and Rachid are exceptional pet sitters. They are very professional, and my pets absolutely love them. They are excellent communicators, which made me feel completely at ease while I was out of town. They stayed at our house longer than planned to ensure the animals weren't alone for too long, and they left the place very clean. I highly recommend them!",
      gradient: "from-rose-400 to-red-500",
    },
    {
      name: "Zoe E.",
      service: "Dog Boarding",
      date: "Nov 10, 2024",
      text: "Ruth & Rachid are wonderful dog caretakers and people! They sent daily updates, were quick communicators, and clearly treat their dog guests are their own. Highly recommend these two!",
      gradient: "from-fuchsia-400 to-pink-500",
    },
    {
      name: "Sarah H.",
      service: "Doggy Day Care",
      date: "Oct 29, 2024",
      text: "Ruth and Rachid are WONDERFUL with our goldendoodle! He loves them so much and gets so excited when we near their home. They take him on lots of walks and he always comes home exhausted, which I love! I feel very comfortable whenever my dog is with them and will continue to use them a lot! :)",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      name: "Tina W.",
      service: "Dog Boarding",
      date: "Oct 13, 2024",
      text: "Ruth and Rachid were so great! Nice neighborhood and home. I felt like my dog was safe and well taken care of over the weekend. Quick to respond and sent pictures. Highly recommend!",
      gradient: "from-lime-400 to-green-500",
    },
    {
      name: "David M.",
      service: "Dog Boarding",
      date: "Oct 13, 2024",
      text: "Ruth and Rachid took such great care of our dogs. They watched our shibas. One of which is just a puppy who was recently neutered and they took such excellent care of him and made him feel at home. They were very communicative and treated our dogs as their own. Would recommend 10/10",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "Alfredo N.",
      service: "Dog Boarding",
      date: "Oct 12, 2024",
      text: "Amazing sitters, kind and caring with my puppy, communicate very well and try to accommodate clients. Very happy, will bring Einstein again!",
      gradient: "from-purple-400 to-indigo-500",
    },
    {
      name: "Grant F.",
      service: "Dog Boarding",
      date: "Oct 09, 2024",
      text: "Ruth & Rachid were absolutely wonderful sitters for Pickles! I highly recommend them and their fun, infectious energy! Pickles received lots of attention and walks which is great. We will definitely use them again in the future!",
      gradient: "from-orange-400 to-red-500",
    },
    {
      name: "Joy P.",
      service: "House Sitting",
      date: "Aug 30, 2024",
      text: "Ruth & Rachid did a great job watching Benny. They were understanding and accommodating, followed our requests and preferences, and sent us updates. Benny had a really nice stay and we would use them again!",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      name: "Stasha B.",
      service: "Dog Boarding",
      date: "Aug 26, 2024",
      text: "Ruth & Rachid took excellent care of our dog Brisket! They were great at communicating the drop off and pickup and giving us updates throughout the stay. We would definitely use them again!",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      name: "David K.",
      service: "Dog Boarding",
      date: "Aug 26, 2024",
      text: "Ruth and Rachid were fantastic sitters for our dog Zero. It is clear they are dog lovers and gave him a lot of love and attention and walks. They graciously met us beforehand and showed us the house, and got to meet our energetic two-year-old. They sent us an update that all was well including some pics and highlights. We totally recommend them!",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      name: "Kathy S.",
      service: "Dog Boarding",
      date: "Aug 20, 2024",
      text: "So glad to have found Ruth & Rachid on Rover.com! I boarded my Golden Retriever Tillie with them for ten nights, and she was not only clearly well taken care of on all fronts, but also didn't seem the least bit eager to leave when I picked her up…I will definitely use them again",
      gradient: "from-emerald-400 to-green-500",
    },
    {
      name: "Katherine W.",
      service: "Dog Boarding",
      date: "Jul 30, 2024",
      text: "Ruth and Rachid took excellent care of our dog, Ollie, who can be an enthusiastic and energetic guest. This was Ollie's second stay and he will definitely be back :)",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      name: "Katherine W.",
      service: "Dog Boarding",
      date: "Jul 22, 2024",
      text: "Ruth and Rachid were incredibly kind and caring with our dog, Ollie. They were thoughtful with their questions at the meet and greet and sent great updates throughout the stay. We would highly recommend!",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      name: "Amy C.",
      service: "Dog Boarding",
      date: "Jul 09, 2024",
      text: "We have been lucky enough to have Ruth and Rachid pet sit for us two times. The first time they sat for us was in 2022 for 2 weeks. At that time we lived in Washington state and had 2 dogs. Their communication was so wonderful prior to and during our sit. They put our mind at ease while we were out of the country and away from our doggies, as they sent updates and pictures. When we returned home our doggies were happy, relaxed and had obviously been well cared for. We returned to a clean home. Ruth and Rachid are responsible, reliable, and loving. We love them so much that since the first sit we have reached out to them every time we travel. They sat for us a second time in May of 2024, again for almost 2 weeks. This time our home was in AZ and we had 4 doggies. One that they had met before and 3 new rescues. Ruth and Rachid again took excellent care of our doggies and home!! We couldnt be happier with them. We highly recommend Ruth and Rachid to care for your animals and home!!! Amy and Giogi",
      gradient: "from-red-400 to-pink-500",
    },
    {
      name: "Arlene J.",
      service: "Dog Boarding",
      date: "Jun 25, 2024",
      text: "I'm a protective mom to my rescue Westie, reluctant to leave him with just anyone. But I found Ruth, whom I quickly learned had spent some 2 years housesitting for families who particularly needed dog, cat, and/or plant care. Takeaway: experienced with short-term care and genuine about dog-sitting. I gave her a try. What a wonderful pet sitter and walker she is! Calm, focused, caring. My pup took to her immediately. I am relieved and excited to have found someone with the qualities I seek to give me confidence that my pup will be well cared for while I'm away.",
      gradient: "from-yellow-400 to-amber-500",
    },
  ]

  const displayedReviews = showAllReviews ? allReviews : allReviews.slice(0, 11)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <Script id="calendly-badge-init" strategy="lazyOnload">
        {`
          window.onload = function() {
            Calendly.initBadgeWidget({
              url: 'https://calendly.com/staycations4pets/30min?hide_gdpr_banner=1',
              text: 'Schedule Meet & Greet',
              color: '#0069ff',
              textColor: '#ffffff',
              branding: true
            });
          }
        `}
      </Script>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/seattle-skyline.jpg" alt="Seattle skyline" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-blue-800/80" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Info */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Staycations for Pets LLC - Licensed & Insured</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">A Loving Staycation for Every Pet</h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                At Staycations for Pets LLC, we believe that pets deserve more than just a place to stay — they deserve
                a warm, caring home-away-from-home where they can relax and feel loved while their owners are away.
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-lg">5.0</span>
                </div>
                <div className="h-6 w-px bg-white/30" />
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Seattle, Washington</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="https://calendly.com/staycations4pets/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Meet & Greet
                </a>
                <a
                  href="https://wa.me/12065028163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all"
                >
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>WhatsApp</span>
                  <span className="text-white/80">•</span>
                  <span>(206) 502-8163</span>
                </a>
              </div>
            </div>

            {/* Right: Profile Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20">
                <img
                  src="/original2.webp"
                  alt="Ruth & Rachid"
                  className="w-full aspect-[4/3] object-contain bg-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-semibold text-gray-900">Licensed & Insured LLC</div>
              <div className="text-sm text-gray-600">Seattle-based business</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-3">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="font-semibold text-gray-900">Years of Experience</div>
              <div className="text-sm text-gray-600">All ages & personalities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12 order-2 lg:order-1">
            {/* Photo Gallery */}
            <section>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Dog className="w-4 h-4" />
                  <span>Photo Gallery</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">See Us in Action</h2>
                <p className="text-lg text-gray-600">Real moments with the pets we love and care for</p>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Large featured image - spans 2x2 */}
                <div
                  className="col-span-4 md:col-span-2 row-span-2 rounded-3xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(galleryImages[0].src)}
                >
                  <img
                    src={galleryImages[0].src || "/placeholder.svg"}
                    alt={galleryImages[0].alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-semibold text-lg">{galleryImages[0].alt}</p>
                  </div>
                </div>

                {/* Second featured image - tall */}
                <div
                  className="col-span-2 row-span-2 rounded-3xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(galleryImages[1].src)}
                >
                  <img
                    src={galleryImages[1].src || "/placeholder.svg"}
                    alt={galleryImages[1].alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-semibold text-lg">{galleryImages[1].alt}</p>
                  </div>
                </div>

                {/* Row of 4 square images */}
                {galleryImages.slice(2, 6).map((image, index) => (
                  <div
                    key={index + 2}
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-xl transition-all duration-500"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-semibold text-sm">{image.alt}</p>
                    </div>
                  </div>
                ))}

                {/* Wide image - spans 2 columns */}
                <div
                  className="col-span-4 md:col-span-2 aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(galleryImages[6].src)}
                >
                  <img
                    src={galleryImages[6].src || "/placeholder.svg"}
                    alt={galleryImages[6].alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-semibold text-lg">{galleryImages[6].alt}</p>
                  </div>
                </div>

                {/* Another wide image */}
                <div
                  className="col-span-4 md:col-span-2 aspect-[16/9] rounded-3xl overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedImage(galleryImages[7].src)}
                >
                  <img
                    src={galleryImages[7].src || "/placeholder.svg"}
                    alt={galleryImages[7].alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-semibold text-lg">{galleryImages[7].alt}</p>
                  </div>
                </div>

                {/* Final row of square images */}
                {galleryImages.slice(8).map((image, index) => (
                  <div
                    key={index + 8}
                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-xl transition-all duration-500"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-semibold text-sm">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* About Section - Who We Are */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  We're Ruth and Rachid, founders of Staycations for Pets LLC, based in Seattle, Washington. As lifelong
                  animal lovers, we've opened our home to provide a cozy, nurturing space for pets to stay when their
                  families are away.
                </p>
                <p>
                  We understand how stressful it can be to leave your pets behind, which is why we've created a calm,
                  clean, and pet-friendly environment that feels like home. We welcome pets into our daily routine —
                  offering plenty of exercise, affection, and one-on-one care.
                </p>
                <p className="font-semibold text-gray-900">
                  Our goal is simple: to give every pet personalized attention, emotional comfort, and the same love and
                  care they receive from their own family.
                </p>
              </div>
            </section>

            {/* Our Experience Section */}
            <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Experience</h3>
                  <p className="text-gray-600">Caring for pets of all ages and needs</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We have years of experience caring for dogs and cats of all ages, sizes, and personalities — from
                  playful puppies to senior pets with special needs. Our home is equipped for comfort and safety, with
                  designated play areas, quiet resting spaces, and outdoor time (weather permitting).
                </p>
                <div className="bg-white/60 rounded-2xl p-6 mt-6">
                  <h4 className="font-bold text-gray-900 mb-4">We are skilled in:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Administering medication and supplements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Caring for pets with medical or mobility issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Providing structured feeding, exercise, and rest schedules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Supporting each pet's unique temperament and routine</span>
                    </li>
                  </ul>
                </div>
                <p className="font-semibold text-gray-900 mt-4">
                  We treat every guest as an individual, ensuring they feel secure, happy, and loved during their stay.
                </p>
              </div>
            </section>

            {/* Our Philosophy Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
                  <p className="text-gray-600">Built on trust, empathy, and communication</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  At Staycations for Pets LLC, we believe great pet care is built on trust, empathy, and communication.
                  We take time to get to know each pet and their owner before boarding, so we can tailor our care to
                  match their needs and habits.
                </p>
                <p className="font-semibold text-gray-900">
                  During your pet's stay, we provide regular updates, photos, and notes — giving you peace of mind that
                  your furry family member is safe, comfortable, and content.
                </p>
              </div>
            </section>

            {/* A Typical Day */}
            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">A Typical Day</h3>
                  <p className="text-gray-600">What your pet can expect</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We give the pets lots of love. We would take them for a long walk in the morning before we start
                working. They will get treats and play time throughout the day. They stay close to us while we are at
                work. After dinner, they will get another long walk maybe on a different route or going down to the
                beach and park. After a nice evening of cuddling on the couch, they will get another short walk before
                bedtime.
              </p>
            </section>

            {/* What We Need to Know */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What We'd Like to Know About Your Pet</h3>
              <p className="text-gray-700 leading-relaxed">
                We would like to know about your pets as much as possible before we start including any food allergies
                or medications, special instructions on how to communicate with them, their likes and dislikes. We
                always ask for their vet's contact in case of emergency.
              </p>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Staycations for Pets</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Licensed and insured LLC</div>
                    <div className="text-sm text-gray-600">Based in Seattle</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Home-based boarding</div>
                    <div className="text-sm text-gray-600">Personal, loving attention</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Safe, clean environment</div>
                    <div className="text-sm text-gray-600">Welcoming and comfortable</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Medical needs experience</div>
                    <div className="text-sm text-gray-600">Medication & special care</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Regular updates</div>
                    <div className="text-sm text-gray-600">Photos and communication</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white/60 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Focus on well-being</div>
                    <div className="text-sm text-gray-600">Comfort & companionship</div>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center text-gray-700 font-semibold italic">
                When your pet stays with Staycations for Pets LLC, they're not just being boarded — they're becoming
                part of our family.
              </p>
            </section>

            {/* Home Details */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Our Home</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Green Checkmarks */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Non-smoking household</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">No children present</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Dogs allowed on furniture</span>
                  </div>
                </div>

                {/* Right Column - Other Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">Does not have a yard</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-700">Has no pets</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">Potty breaks every 0-2 hours</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Calendly booking section */}
            <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 shadow-xl border border-blue-100/50">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mb-6 shadow-lg">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-3">Book Your Meet & Greet</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Schedule a complimentary consultation to discuss your pet's unique needs and get to know us better
                </p>
              </div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/staycations4pets/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "600px" }}
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">🔒 Your information is secure and will never be shared</p>
              </div>
            </section>

            {/* Reviews */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
                  <p className="text-gray-600 mt-2">What pet parents say about us</p>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-gray-900">5.0</span>
                </div>
              </div>

              <div className="space-y-6">
                {displayedReviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      <Avatar className={`w-14 h-14 bg-gradient-to-br ${review.gradient} flex-shrink-0`} />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                              {review.service.includes("House") || review.service.includes("Drop-In") ? (
                                <Home className="w-4 h-4" />
                              ) : (
                                <Dog className="w-4 h-4" />
                              )}
                              {review.service}
                            </p>
                          </div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mt-3">{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {!showAllReviews && (
                <button
                  onClick={() => setShowAllReviews(true)}
                  className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View All {allReviews.length} Reviews
                </button>
              )}
            </section>

            {/* Ready to Book CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center shadow-2xl">
              <h2 className="text-4xl font-bold mb-4">Ready to Book?</h2>
              <p className="text-xl text-blue-100 mb-8">Schedule a meet & greet to get started</p>
              <a
                href="https://calendly.com/staycations4pets/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-12 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us Today
              </a>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Services & Pricing */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Services & Pricing</h3>
              </div>

              <div className="space-y-4">
                {/* Boarding */}
                <div className="pb-4 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">Dog Boarding</h4>
                      <p className="text-xs text-gray-600">in our home</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">$75</div>
                      <div className="text-xs text-gray-600">per night</div>
                    </div>
                  </div>
                  {showAllServices && (
                    <div className="text-xs text-gray-600 space-y-2 mt-3 pl-3 border-l-2 border-blue-100">
                      <div className="flex justify-between">
                        <span>Holiday Rate</span>
                        <span className="font-semibold">$90/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Dog</span>
                        <span className="font-semibold">+$50/dog/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Puppy Rate</span>
                        <span className="font-semibold">$85/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cat Care</span>
                        <span className="font-semibold">$50/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Cat</span>
                        <span className="font-semibold">+$30/cat/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>14+ Nights</span>
                        <span className="font-semibold">$70/night</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* House Sitting */}
                <div className="pb-4 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">House Sitting</h4>
                      <p className="text-xs text-gray-600">in your home</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">$85</div>
                      <div className="text-xs text-gray-600">per night</div>
                    </div>
                  </div>
                  {showAllServices && (
                    <div className="text-xs text-gray-600 space-y-2 mt-3 pl-3 border-l-2 border-blue-100">
                      <div className="flex justify-between">
                        <span>Holiday Rate</span>
                        <span className="font-semibold">$100/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Dog</span>
                        <span className="font-semibold">+$50/dog/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Puppy Rate</span>
                        <span className="font-semibold">$85/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cat Care</span>
                        <span className="font-semibold">$75/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Cat</span>
                        <span className="font-semibold">+$30/cat/night</span>
                      </div>
                      <div className="flex justify-between">
                        <span>14+ Nights</span>
                        <span className="font-semibold">$70/night</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Drop-In Visits */}
                <div className="pb-4 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">30 minute Drop-In Visit</h4>
                      <p className="text-xs text-gray-600">visits in your home</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">$45</div>
                      <div className="text-xs text-gray-600">per visit</div>
                    </div>
                  </div>
                  {showAllServices && (
                    <div className="text-xs text-gray-600 space-y-2 mt-3 pl-3 border-l-2 border-blue-100">
                      <div className="flex justify-between">
                        <span>60 minute rate</span>
                        <span className="font-semibold">+$30/visit</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Holiday Rate</span>
                        <span className="font-semibold">$60/visit</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Dog</span>
                        <span className="font-semibold">+$30/dog/visit</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Puppy Rate</span>
                        <span className="font-semibold">$45/visit</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cat Care</span>
                        <span className="font-semibold">$45/visit</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Cat</span>
                        <span className="font-semibold">+$20/cat/visit</span>
                      </div>
                      <div className="flex justify-between">
                        <span>14+ days</span>
                        <span className="font-semibold">$40/visit</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Doggy Day Care */}
                <div className="pb-4 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">Doggy Day Care</h4>
                      <p className="text-xs text-gray-600">in our home</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">$75</div>
                      <div className="text-xs text-gray-600">per day</div>
                    </div>
                  </div>
                  {showAllServices && (
                    <div className="text-xs text-gray-600 space-y-2 mt-3 pl-3 border-l-2 border-blue-100">
                      <div className="flex justify-between">
                        <span>Holiday Rate</span>
                        <span className="font-semibold">$90/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Dog</span>
                        <span className="font-semibold">+$50/dog/day</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Puppy Rate</span>
                        <span className="font-semibold">$90/day</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dog Walking */}
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">30 minute Dog Walking</h4>
                      <p className="text-xs text-gray-600">In your neighborhood</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">$40</div>
                      <div className="text-xs text-gray-600">per walk</div>
                    </div>
                  </div>
                  {showAllServices && (
                    <div className="text-xs text-gray-600 space-y-2 mt-3 pl-3 border-l-2 border-blue-100">
                      <div className="flex justify-between">
                        <span>60 minute rate</span>
                        <span className="font-semibold">+$25/walk</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Holiday Rate</span>
                        <span className="font-semibold">$50/walk</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Dog</span>
                        <span className="font-semibold">+$20/dog/walk</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Puppy Rate</span>
                        <span className="font-semibold">$50/walk</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="w-full mt-6 text-center text-sm text-blue-600 hover:text-blue-700 font-semibold py-2 hover:bg-blue-50 rounded-lg transition-colors"
              >
                {showAllServices ? "Show less" : "See additional rates"}
              </button>
            </div>

            {/* Skills */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Skills & Expertise</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">10 years of experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Oral medication administration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Syringe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Injected medication administration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Senior dog experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Special needs dog experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Can provide daily exercise</span>
                </li>
              </ul>
            </div>

            {/* Safety */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="font-bold text-gray-900">Safety & Environment</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                We are available to take care of the pets at our home or the hosts' home. We have a large house in a
                great neighborhood. The pets would feel safe and comfortable if they stay at our home.
              </p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                  <p className="text-sm text-gray-600">Madrona, Seattle WA</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <img src="/staticmap.png" alt="Map of Madrona neighborhood in Seattle" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/10 backdrop-blur-sm p-3 text-white hover:bg-white/20 transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          {selectedImage && (
            <img src={selectedImage || "/placeholder.svg"} alt="Gallery image" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
