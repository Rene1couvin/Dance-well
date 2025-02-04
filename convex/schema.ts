import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  admins: defineTable({
    profilePicture: v.string(),  // URL or reference to image
    names: v.string(),
    phone: v.string(),
    email: v.string(),
    dob: v.string(),  // Store date as a string (e.g., "YYYY-MM-DD")
    sex: v.string(),
    bio: v.string(),
    password: v.string(),  // Store passwords securely
  }),

  trainers: defineTable({
    profilePicture: v.string(),
    names: v.string(),
    phone: v.string(),
    email: v.string(),
    dob: v.string(),  // Store date as a string (e.g., "YYYY-MM-DD")
    sex: v.string(),
    bio: v.string(),
    trainCategory: v.string(),
    password: v.string(),
  }),

  students: defineTable({
    profilePicture: v.string(),
    names: v.string(),
    phone: v.string(),
    email: v.string(),
    dob: v.string(),  // Store date as a string (e.g., "YYYY-MM-DD")
    sex: v.string(),
    bio: v.string(),
    selectedCategory: v.string(),
    password: v.string(),
  }),

  categories: defineTable({
    name: v.string(),
  }),

  events: defineTable({
    name: v.string(),
    picture: v.string(),
    description: v.string(),
    date: v.string(),  // Store date as a string (e.g., "YYYY-MM-DD")
    time: v.string(),
  }),

  news: defineTable({
    name: v.string(),
    picture: v.string(),
    description: v.string(),
    date: v.string(),  // Store date as a string (e.g., "YYYY-MM-DD")
  }),

  gallery: defineTable({
    picture: v.string(),
    category: v.string(),
  }),
});
