<script setup lang="ts">
import { IMAGES } from '@/constent/Them';
import Banner from '@/elements/Banner.vue';
import { ref, computed } from 'vue';

// Define the type for a blog post
interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
}

// Initial mock data
const posts = ref<BlogPost[]>([
  {
    id: 1,
    image: IMAGES.blogMiddle1,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "The Art of Managing Business and Patient Care",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 2,
    image: IMAGES.blogMiddle2,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "The Art of Managing Business and Patient Care",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 3,
    image: IMAGES.blogMiddle3,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "The Art of Managing Business and Patient Care",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 4,
    image: IMAGES.blogMiddle4,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "Radiant reflections expert dermatology and skin.",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 5,
    image:IMAGES.blogMiddle5,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "Glow guide your path to perfect skin health",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 6,
    image: IMAGES.blogMiddle6,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "Brilliant skin blog your dermatology care resource",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 7,
    image: IMAGES.blogMiddle3,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "Brilliant skin blog your dermatology care resource",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  {
    id: 8,
    image: IMAGES.blogMiddle1,
    date: "17 May 2023",
    author: "Nashid Martines",
    title: "Radiant reflections expert dermatology and skin.",
    excerpt: "It is a long established fact that a reader will be distracted by the readable content."
  },
  
]);

// Define pagination variables
const postsPerPage = 6;
const currentPage = ref(1);

const displayedPosts = computed(() => {
  return posts.value.slice(0, postsPerPage * currentPage.value);
});

const hasMorePosts = computed(() => {
  return displayedPosts.value.length < posts.value.length;
});

const loadMorePosts = () => {
  if (hasMorePosts.value) {
    currentPage.value++;
  }
};
</script>
<template>

<main class="page-content">
    <Banner :pageTitle="'Blog List Sidebar'"/>
    <section class="content-inner">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-12 m-b30">
                    <div class="row loadmore-content">
                        <div class="col-12 m-b30 wow fadeInUp" 
                            :data-wow-delay="`${index * 0.2 + 0.2}s`"
                            data-wow-duration="0.8s"
                            v-for="(post, index) in displayedPosts"
                            :key="post.id"
                        >
                            <div class="dz-card style-1 blog-half blog-half-2">
                                <div class="dz-media">
                                    <img :src="post.image" alt="">
                                </div>
                                <div class="dz-info">
                                    <h3 class="dz-title">
                                        <RouterLink to="/blog-details">{{ post.title }}</RouterLink>
                                    </h3>
                                    <p>{{ post.excerpt }}</p>
                                    <div class="info-bottom">
                                    <div class="dz-meta">
                                        <ul>
                                        <li class="post-date">{{ post.date }}</li>
                                        <li class="post-author">By <a href="javascript:void(0);">{{ post.author }}</a>
                                        </li>
                                        </ul>
                                    </div>
                                    <RouterLink to="/blog-details" class="btn btn-square btn-secondary rounded-circle">
                                        <i class="feather icon-arrow-up-right"></i>
                                    </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center m-t30 m-lg-t0 wow fadeInUp"   v-if="hasMorePosts">
                        <a href="javascript:void(0);" @click="loadMorePosts" class="btn btn-lg btn-icon btn-secondary dz-load-more"> Load More <span class="right-icon">
                            <i class="feather icon-refresh-ccw"></i>
                        </span>
                        </a>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-12 m-b30">
                    <aside class="side-bar sticky-top  m-b30">
                    <div class="widget widget-bx bg-light wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <div class="widget-title">
                        <h4 class="title">Search</h4>
                        </div>
                        <div class="search-bx">
                        <form role="search" method="post">
                            <div class="input-group mb-0">
                            <input name="text" class="form-control bg-white" placeholder="Search" type="text">
                            <div class="input-group-btn">
                                <button type="submit">
                                <i class="feather icon-search"></i>
                                </button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div class="widget widget_categories style-1 widget-bx bg-light wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                        <div class="widget-title">
                        <h4 class="title">Category</h4>
                        </div>
                        <ul>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Acupressure</a> (10)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Allgemein</a> (5)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Blood</a> (17)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Food</a> (13)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Health</a> (06)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Mental Health</a> (17)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Therapy</a> (13)
                        </li>
                        <li class="cat-item">
                            <a href="javascript:void(0);">Walking</a> (06)
                        </li>
                        </ul>
                    </div>
                    <div class="widget recent-posts-entry widget-bx bg-light wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                        <div class="widget-title">
                        <h4 class="title">Latest Post</h4>
                        </div>
                        <div class="widget-post-bx">
                        <div class="widget-post clearfix">
                            <div class="dz-media">
                            <img src="../../assets/images/blog/small/img1.webp" alt="/">
                            </div>
                            <div class="dz-info">
                            <div class="dz-meta">
                                <ul>
                                <li class="post-date">
                                    <a href="javascript:void(0);">17 May 2022</a>
                                </li>
                                </ul>
                            </div>
                            <h6 class="title">
                                <RouterLink to="/blog-details">The Art of Managing Business and Patient Care</RouterLink>
                            </h6>
                            </div>
                        </div>
                        <div class="widget-post clearfix">
                            <div class="dz-media">
                            <img src="../../assets/images/blog/small/img2.webp" alt="/">
                            </div>
                            <div class="dz-info">
                            <div class="dz-meta">
                                <ul>
                                <li class="post-date">
                                    <a href="javascript:void(0);">17 May 2022</a>
                                </li>
                                </ul>
                            </div>
                            <h6 class="title">
                                <RouterLink to="/blog-details">The Art of Managing Business and Patient Care</RouterLink>
                            </h6>
                            </div>
                        </div>
                        <div class="widget-post clearfix">
                            <div class="dz-media">
                            <img src="../../assets/images/blog/small/img3.webp" alt="/">
                            </div>
                            <div class="dz-info">
                            <div class="dz-meta">
                                <ul>
                                <li class="post-date">
                                    <a href="javascript:void(0);">17 May 2022</a>
                                </li>
                                </ul>
                            </div>
                            <h6 class="title">
                                <RouterLink to="/blog-details">The Art of Managing Business and Patient Care</RouterLink>
                            </h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="widget widget_tag_cloud widget-bx bg-light light wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                        <div class="widget-title">
                        <h4 class="title">Tags</h4>
                        </div>
                        <div class="tagcloud">
                        <a href="javascript:void(0);">Acupressure</a>
                        <a href="javascript:void(0);">Allgemein</a>
                        <a href="javascript:void(0);">Blood</a>
                        <a href="javascript:void(0);">Food</a>
                        <a href="javascript:void(0);">Health</a>
                        <a href="javascript:void(0);">Mental Health</a>
                        <a href="javascript:void(0);">Therapy</a>
                        <a href="javascript:void(0);">Walking</a>
                        </div>
                    </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>
</main>
</template>