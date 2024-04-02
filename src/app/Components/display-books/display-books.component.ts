import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-books',
  standalone: true,
  imports: [
    BookCardComponent,
    CommonModule
  ],
  templateUrl: './display-books.component.html',
  styleUrl: './display-books.component.scss'
})
export class DisplayBooksComponent {
  count: any = 128;
  start: any = 0;
  end: any = 12;
  books: any = [{
    "bookId": 6,
    "bookName": "You Can",
    "description": "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life—such as sitting for an hour in silence to shape your creative vision, going the extra mile in serving others, letting your character rule your work, studying your mistakes, learning to use time, and many more. Inculcate these habits, and your life will change. A powerful guide that asserts that you can do anything you set your mind to, you can is filled with quotes imparting wisdom of a man whose teachings have inspired millions—napoleon Hill, and commentary by the executive director of the Napoleon Hill foundation, don M. Green. “You yourself determine the height to which you shall climb. Have you the summit in view?”.",
    "author": "George Matthew Adams",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711884819/Notes/0.jpg",
    "book_price": 149,
    "discount_price": 129,
    "quantity": 10,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:03",
    "lastUpdatedAt": "31-Mar-2024 17:03"
  },
  {
    "bookId": 7,
    "bookName": "The Power of Your Subconscious Mind",
    "description": "The Power of Your Subconscious Mind is one of the most promising self improvement books that you can gift to yourself or your loved ones. This book is designed to help you improve your relationships, health, and also to give you an internal strength that makes every hurdle look small. The book brings together best of both the worlds – scientific research as well as spiritual wisdom. It used the combined ideas to explain how our subconscious mind has the power to change our lives. The book explains how by understanding and learning to control our subconscious mind, we can welcome a world of prosperity, happiness and success. This book will act as a guide and help you understand the depth of your subconscious, get rid of fears and attract what you desire simply by changing your beliefs. Having sold millions of copies, this book and its ideas have changed the lives of many all over the world.",
    "author": "Joseph Murphy",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711884968/Notes/7.jpg",
    "book_price": 275,
    "discount_price": 149,
    "quantity": 8,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:06",
    "lastUpdatedAt": "31-Mar-2024 17:06"
  },
  {
    "bookId": 8,
    "bookName": "The Power of A Positive Attitude: Your Road To Success",
    "description": "Have you ever wondered how your attitude can influence your Success and failure? Have you ever considered the power of saying ‘I Can’, ‘I must’, ‘I will’? “I am not saying a positive attitude can make you successful. I am saying a positive attitude will make you successful.” – Norman Vincent Peale from helping you interpret and understand the true nature of your current attitude to building up self-confidence, which is a must for an affirmative attitude, this book details the dos and don’ts in dealing with your boss, provides handy tips for overcoming negative attitude, managing stress, and coping with burnout, and expounds on how converting negative thinking to positive action can bring about a change in life. Packed with powerful information, The power of a positive attitude will help you uncover your hidden abilities and achieve success.",
    "author": "Roger Fritz and Edited by Arthur R. Pell, Ph.D.",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885092/Notes/8.jpg",
    "book_price": 150,
    "discount_price": 139,
    "quantity": 10,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:08",
    "lastUpdatedAt": "31-Mar-2024 17:08"
  },
  {
    "bookId": 9,
    "bookName": "How to Stop Worrying and Start Living",
    "description": "Are you so focused on a better tomorrow that you are unable to enjoy the present? Do you make great plans but cannot implement them efficiently? Do worries and insecurity overshadow your happiness and life? Break free from all these problems and step into a happier and more successful life with How to Stop Worrying and Start Living. It is a compendium of actionable insights on how to beat stress, fear and anxiety to lead a peaceful life. Having helped millions of readers worldwide, this book lists tried and tested life-lessons that is sure to change your life for the better. - Helped millions of readers worldwide - Tried and tested life-lessons - Find your true inner self - Learn to manage your time efficiently - Create a planned approach to physical, emotional and financial success",
    "author": "Dale Carnegie",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885215/Notes/9.jpg",
    "book_price": 199,
    "discount_price": 129,
    "quantity": 12,
    "rating": 4,
    "createdAt": "31-Mar-2024 17:10",
    "lastUpdatedAt": "31-Mar-2024 17:10"
  },
  {
    "bookId": 10,
    "bookName": "How to Win Friends and Influence People",
    "description": "Do you feel stuck in life, not knowing how to make it more successful? Do you wish to become more popular? Are you craving to earn more? Do you wish to expand your horizon, earn new clients and win people over with your ideas? How to Win Friends and Influence People is a well-researched and comprehensive guide that will help you through these everyday problems and make success look easier. You can learn to expand your social circle, polish your skill set, find ways to put forward your thoughts more clearly, and build mental strength to counter all hurdles that you may come across on the path to success. Having helped millions of readers from the world over achieve their goals, the clearly listed techniques and principles will be the answers to all your questions. ",
    "author": "Dale Carnegie",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885311/Notes/10.jpg",
    "book_price": 250,
    "discount_price": 135,
    "quantity": 15,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:11",
    "lastUpdatedAt": "31-Mar-2024 17:11"
  },
  {
    "bookId": 11,
    "bookName": "The Power of A Positive Attitude",
    "description": "Have you ever wondered how your attitude can influence your Success and failure? Have you ever considered the power of saying ‘I Can’, ‘I must’, ‘I will’? “I am not saying a positive attitude can make you successful. I am saying a positive attitude will make you successful.” – Norman Vincent Peale from helping you interpret and understand the true nature of your current attitude to building up self-confidence, which is a must for an affirmative attitude, this book details the dos and don’ts in dealing with your boss, provides handy tips for overcoming negative attitude, managing stress, and coping with burnout, and expounds on how converting negative thinking to positive action can bring about a change in life. Packed with powerful information, The power of a positive attitude will help you uncover your hidden abilities and achieve success.",
    "author": "Roger Fritz (Author), Ph.D. Edited by Arthur R. Pell (Author)",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885473/Notes/11.jpg",
    "book_price": 150,
    "discount_price": 139,
    "quantity": 6,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:14",
    "lastUpdatedAt": "31-Mar-2024 17:14"
  },
  {
    "bookId": 12,
    "bookName": "Don't Believe Everything You Think",
    "description": "Discover how to conquer anxiety, self-doubt, and self-sabotage without depending on motivation or willpower. 'Don't Believe Everything You Think' uncovers the core of psychological suffering and offers insights to effortlessly shape the life you crave. Learn to detach from negativity, embrace love and joy, escape negative thought cycles, and tap into inner wisdom. The message is clear: anyone can attain peace, love, and fulfillment, irrespective of their history. It's not about rewiring your brain, but expanding your consciousness for lasting transformation. Within this book, delve into the core of emotional suffering and receive insights on effortlessly curating the life you aspire to.",
    "author": "Joseph Nguyen",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885656/Notes/12.jpg",
    "book_price": 299,
    "discount_price": 172,
    "quantity": 9,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:17",
    "lastUpdatedAt": "31-Mar-2024 17:17"
  },
  {
    "bookId": 13,
    "bookName": "Courage To Be Disliked, The: How to free yourself, change your life and achieve real happiness",
    "description": "The Japanese phenomenon that teaches us the simple yet profound lessons required to liberate our real selves and find lasting happiness. Marie Claire's best self-help books for 2018. The Courage to be Disliked shows you how to unlock the power within yourself to become your best and truest self, change your future and find lasting happiness. Using the theories of Alfred Adler, one of the three giants of 19th century psychology alongside Freud and Jung, the authors explain how we are all free to determine our own future free of the shackles of past experiences, doubts and the expectations of others. It's a philosophy that's profoundly liberating, allowing us to develop the courage to change, and to ignore the limitations that we and those around us can place on ourselves.The result is a book that is both highly accessible and profound in its importance. Millions have already read and benefited from its wisdom. Now that The Courage to be Disliked has been published for the first time in English, so can you.",
    "author": "Ichiro Kishimi and Fumitake Koga",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885821/Notes/13.jpg",
    "book_price": 499,
    "discount_price": 329,
    "quantity": 10,
    "rating": 5,
    "createdAt": "31-Mar-2024 17:20",
    "lastUpdatedAt": "31-Mar-2024 17:20"
  },
  {
    "bookId": 14,
    "bookName": "Courage to be Happy: True Contentment Is Within Your Power",
    "description": "The sequel to the global bestseller The courage to be Disliked, the Japanese phenomenon in applying twentieth-century psychology to contemporary dilemmas continues with life-changing advice on finding happiness. In the courage to be happy, ichiro kishimi and fumitake koga again distil their wisdom into simple yet profound advice to show us how we, too, can use twentieth-century psychological theory to find true happiness. On the courage to be Disliked: the ideas proffered here will certainly make you think twice about the real cause of the emotional drama in your life. A thought-provoking read. - Mail on Sunday. A real game-changer - Marie Claire.",
    "author": "Ichiro Kishimi",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885922/Notes/14.jpg",
    "book_price": 499,
    "discount_price": 346,
    "quantity": 12,
    "rating": 5,
    "createdAt": "31-Mar-2024 17:22",
    "lastUpdatedAt": "31-Mar-2024 17:22"
  },
  {
    "bookId": 15,
    "bookName": "I Am Invincible, Thirteen True Tales of Courage, Grit, & Survival",
    "description": "Have you ever been in the bottomless pit of despair? And then, through your own efforts, worked yourself up out of the pit onto the cliff in front, kept climbing it despite bruised knees and bleeding Elbows until you reached right up to finally experience The ecstasy of the breath-taking view from the top? That is the feeling I call true happiness. Nothing outside us can compare with this kind of happiness. Here are inspiring tales of thirteen “warriors of life” who have done exactly this! They have fought bravely and not only triumphed, but gone on to build lives more beautiful than the ones they had inherited. Allow them to inspire You towards new possibilities, towards the enjoyment of each twist and turn down life's road, towards the realisation and wisdom that difficulties and overcoming them are what make our “passing through this planet” The most amazing part of our human experience.",
    "author": "Neelam Kumar",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711885997/Notes/15.jpg",
    "book_price": 299,
    "discount_price": 239,
    "quantity": 7,
    "rating": 4,
    "createdAt": "31-Mar-2024 17:23",
    "lastUpdatedAt": "31-Mar-2024 17:23"
  },
  {
    "bookId": 16,
    "bookName": "Vikram & Betal - Life Lessons for Our Times",
    "description": "This classic retelling of the adventures of Vikram and Betal combines the old with the new. It takes an insightful, refreshing look at the fascinating encounters between King Vikramaditya and the playful ghost Betal. Each thought-provoking tale brims with wisdom, wit, and critical thinking. And to captivate the reader further, each ancient tale ends with a Life Skills Nugget, thus combining the wisdom of the past with vital tools necessary for our digital age. Whatever your age, dip into these ancient tales, suspend your judgment and simply enjoy. This illustrated book is a must-have for all children! • Child-friendly content • The stories will instill life-skill lessons in children • Brings them closer to Indian traditional tales • Develops reading skills • Comprises stunning illustrations",
    "author": "Neelam Kumar",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711886160/Notes/16.jpg",
    "book_price": 299,
    "discount_price": 199,
    "quantity": 5,
    "rating": 3.5,
    "createdAt": "31-Mar-2024 17:26",
    "lastUpdatedAt": "31-Mar-2024 17:26"
  },
  {
    "bookId": 17,
    "bookName": "Bipin: The Man Behind the Uniform",
    "description": "On the morning of 8 December 2021, India's Chief of Defence Staff, General Bipin Rawat, and his wife, Madhulika, said goodbye to their daughter, Tarini, and dogs, and left their Delhi home to board a flight for Sulur in Tamil Nadu. Around 11.48 a.m., they boarded an Mi-17 V5 helicopter that took off from Sulur to Wellington, where Gen. Rawat was to deliver a lecture at the Defence Services Staff College. Just a few minutes away from its destination, the chopper crashed, and all fourteen passengers onboard eventually perished. It was a sudden and shocking end to the life of a man who had risen like a meteor in the defence forces. Bipin: The Man behind the Uniform is the story of the NDA cadet who was relegated in the third term for not being able to do a mandatory jump into the swimming pool; of the young Second Lieutenant who was tricked into losing his ID card at the Amritsar railway station by a 5/11 Gorkha Rifles officer posing as his sahayak; of the Major with a leg in plaster who was carried up to his company post on the Pakistan border because he insisted on joining his men for Dusshera celebrations under direct enemy observation; of the Army Chief who decided India would retaliate immediately and openly to every act of cross-border terrorism; of the Chief of Defence Staff who was happiest dancing the jhamre with his Gorkha troops. Written by bestselling author Rachna Bisht Rawat and featuring in-depth interviews with Bipin Rawat's friends, family members and comrades, this book is a befitting tribute to one of India's greatest and most controversial Generals.",
    "author": "Rachna Bisht Rawat",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711886414/Notes/17.jpg",
    "book_price": 599,
    "discount_price": 389,
    "quantity": 10,
    "rating": 4.5,
    "createdAt": "31-Mar-2024 17:30",
    "lastUpdatedAt": "31-Mar-2024 17:30"
  },
  {
    "bookId": 18,
    "bookName": "The Diary Of A Young Girl",
    "description": "This leather-bound edition is exquisitely designed with a silver-foiled cover, gilded edges and beautiful endpapers. It is ideal to be read and treasured and makes for a perfect addition to any library.Anne Frank?s diary needs no introduction. This beautifully written memoir of a young girl caught in the middle of one of the most horrific periods of human history, is a testament to the indestructible human will to persevere and survive in the face of the most adverse of circumstances. Where Anne Frank herself became one of the victims of the Second World War, her words, crowding every available inch of space in her diary, survived to keep her story and her memory alive for the rest of the world through the ages.",
    "author": "Anne Frank",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711886530/Notes/18.jpg",
    "book_price": 599,
    "discount_price": 429,
    "quantity": 8,
    "rating": 5,
    "createdAt": "31-Mar-2024 17:32",
    "lastUpdatedAt": "31-Mar-2024 17:32"
  },
  {
    "bookId": 19,
    "bookName": "The Secret Garden",
    "description": "The Secret Garden is a beloved classic that transports readers into a magical world of imagination and transformation. Written by Frances Hodgson Burnett, this enchanting tale follows the adventures of Mary Lennox, a young girl who discovers a hidden garden within the walls of her uncle's grand estate. As Mary nurtures the neglected garden, she unlocks not only its mysteries but also her own inner strength and resilience. With its captivating storytelling and vivid descriptions, this timeless novel captivates readers of all ages and reminds us of the power of nature and the beauty of friendship. Captivating tale of a hidden garden and personal growthExplores themes of nature, resilience, and friendshipTakes readers on a magical journey of imaginationEngages readers of all ages with its enchanting storytelling. A beloved classic that stands the test of time.",
    "author": "Frances Hodgson Burnett",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711886662/Notes/19.jpg",
    "book_price": 499,
    "discount_price": 319,
    "quantity": 10,
    "rating": 4,
    "createdAt": "31-Mar-2024 17:34",
    "lastUpdatedAt": "31-Mar-2024 17:34"
  },
  {
    "bookId": 20,
    "bookName": "Little Women Deluxe Hardbound Edition",
    "description": "Wealth is certainly a most desirable thing,   but poverty has its sunny side . . .”  It’s Christmas time . . .   The March family has fallen on bad times after the father lost their money. The four March sisters—the nearly perfect ‘little woman’ Meg, the tomboyish Jo, the shy but wise Beth, and the artist of the family Amy—are planning to brighten up their Christmas by buying presents while their father is away, fighting the Civil War.  Featuring suspense, humour, and engaging characters, Alcott’s Little Women explores their lives as they make their way into adulthood. What becomes of the sisters as they fight the dangers of gender stereotyping while being torn between familial duties and personal growth?   This classic collectable is a must-read for all!   • This delightfully surprising yarn of family life is encased in this beautiful edition   • This timeless story comprises memorable and relatable characters that will keep the readers hooked  • The varied themes and thought-provoking ideas will take the reader on an incredible journey  • This covetable deluxe edition comes with gilded edges, a ribbon bookmark, and beautiful endpapers  • It is perfect for gifting and will make a good addition to any library",
    "author": "Louisa May Alcott",
    "book_image": "http://res.cloudinary.com/demirsba2/image/upload/v1711886764/Notes/20.jpg",
    "book_price": 749,
    "discount_price": 499,
    "quantity": 5,
    "rating": 5,
    "createdAt": "31-Mar-2024 17:36",
    "lastUpdatedAt": "31-Mar-2024 17:36"
  }

  ]


  activePageNumber: number = 1;

  shiftActive(direction: string) {
    const totalBooks = this.books.length;
    const pageSize = 12;

    if (direction === 'next') {
      if (this.activePageNumber < Math.ceil(totalBooks / pageSize)) {
        this.activePageNumber++;
        if (this.start + pageSize > totalBooks) {
          this.start += pageSize;
          this.end += pageSize;
        } else {
          this.start += pageSize;
          this.end = totalBooks;
        }

      }
    } else if (direction === 'prev') {
      if (this.activePageNumber > 1) {
        this.activePageNumber--;
        if (this.start <= 0) {
          this.start = 0;
          this.end = pageSize;
        }
        else {
          this.start -= pageSize;
          this.end -= pageSize;
        }
      }
    }
  }
}
