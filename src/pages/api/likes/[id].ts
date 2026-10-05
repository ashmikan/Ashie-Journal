import type { APIRoute } from "astro";
import { redis } from "../../../lib/redis";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const quoteId = params.id;

  if (!quoteId) {
    return new Response(
      JSON.stringify({ error: "Quote ID is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  if (!redis) {
    return new Response(
      JSON.stringify({ error: "Likes service is not configured" }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const likes =
      (await redis.get<number>(`quote:${quoteId}:likes`)) ?? 0;

    return new Response(
      JSON.stringify({
        quoteId,
        likes,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Redis GET error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to load likes",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

export const POST: APIRoute = async ({ params }) => {
  const quoteId = params.id;

  if (!quoteId) {
    return new Response(
      JSON.stringify({ error: "Quote ID is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  if (!redis) {
    return new Response(
      JSON.stringify({ error: "Likes service is not configured" }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const key = `quote:${quoteId}:likes`;

    const likes = await redis.incr(key);

    return new Response(
      JSON.stringify({
        quoteId,
        likes,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Redis POST error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to like quote",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  const quoteId = params.id;

  if (!quoteId) {
    return new Response(
      JSON.stringify({ error: "Quote ID is required" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  if (!redis) {
    return new Response(
      JSON.stringify({ error: "Likes service is not configured" }),
      {
        status: 503,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const key = `quote:${quoteId}:likes`;
    const currentLikes = (await redis.get<number>(key)) ?? 0;
    const likes = currentLikes > 0 ? await redis.decr(key) : 0;

    if (likes < 0) {
      await redis.set(key, 0);
    }

    return new Response(
      JSON.stringify({
        quoteId,
        likes: Math.max(likes, 0),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Redis DELETE error:", error);

    return new Response(
      JSON.stringify({
        error: "Failed to remove like",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
};