import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db, storage } from "./firebase";

// ─── Types ────────────────────────────────────────────────────────────────────

export type BlogPost = {
  id: string;
  titleAr: string;
  titleEn: string;
  slugAr: string;
  slugEn: string;
  contentAr: string;
  contentEn: string;
  excerptAr: string;
  excerptEn: string;
  imageURL: string;
  metaDescriptionAr: string;
  metaDescriptionEn: string;
  published: boolean;
  publishedAt: Timestamp | null;
  updatedAt: Timestamp | null;
};

export type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  locale: "ar" | "en";
  read: boolean;
  createdAt: Timestamp | null;
  pageUrl?: string;
};

// ─── Blog Posts ───────────────────────────────────────────────────────────────

const POSTS_COL = "blog_posts";

export const getBlogPosts = async (publishedOnly = true): Promise<BlogPost[]> => {
  const col = collection(db, POSTS_COL);
  const q = publishedOnly
    ? query(col, where("published", "==", true), orderBy("publishedAt", "desc"))
    : query(col, orderBy("updatedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as BlogPost));
};

export const getBlogPostBySlug = async (
  slug: string,
  locale: "ar" | "en"
): Promise<BlogPost | null> => {
  const col = collection(db, POSTS_COL);
  const field = locale === "ar" ? "slugAr" : "slugEn";
  const q = query(col, where(field, "==", slug), where("published", "==", true));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() } as BlogPost;
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  const snap = await getDoc(doc(db, POSTS_COL, id));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as BlogPost;
};

export const createBlogPost = async (
  data: Omit<BlogPost, "id" | "publishedAt" | "updatedAt">
): Promise<string> => {
  const ref = await addDoc(collection(db, POSTS_COL), {
    ...data,
    publishedAt: data.published ? serverTimestamp() : null,
    updatedAt: serverTimestamp(),
  });
  return ref.id;
};

export const updateBlogPost = async (
  id: string,
  data: Partial<Omit<BlogPost, "id">>
): Promise<void> => {
  await updateDoc(doc(db, POSTS_COL, id), {
    ...data,
    updatedAt: serverTimestamp(),
    ...(data.published ? { publishedAt: serverTimestamp() } : {}),
  });
};

export const deleteBlogPost = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, POSTS_COL, id));
};

// ─── Image Upload ─────────────────────────────────────────────────────────────

export const uploadBlogImage = async (
  file: File,
  postId: string
): Promise<string> => {
  const storageRef = ref(storage, `blog/${postId}/${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export const deleteBlogImage = async (url: string): Promise<void> => {
  try {
    const storageRef = ref(storage, url);
    await deleteObject(storageRef);
  } catch {
    // ignore if image doesn't exist
  }
};

// ─── Submissions ──────────────────────────────────────────────────────────────

const SUBS_COL = "submissions";

export const getSubmissions = async (): Promise<Submission[]> => {
  const col = collection(db, SUBS_COL);
  const q = query(col, orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Submission));
};

export const saveSubmission = async (
  data: Omit<Submission, "id" | "createdAt" | "read">
): Promise<void> => {
  await addDoc(collection(db, SUBS_COL), {
    ...data,
    read: false,
    createdAt: serverTimestamp(),
  });
};

export const markSubmissionRead = async (
  id: string,
  read: boolean
): Promise<void> => {
  await updateDoc(doc(db, SUBS_COL, id), { read });
};

export const deleteSubmission = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, SUBS_COL, id));
};
