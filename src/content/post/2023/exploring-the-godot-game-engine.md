---
publishDate: 2023-09-24T00:00:00Z
title: Exploring the Godot game engine
excerpt: I sat down this weekend to discover the Godot game engine as a complete beginner and its capabilities. Here are some thoughts.
image: /images/blog-fi/2023-09-24.jpg
tags:
  - game development
  - Godot
metadata:
  canonical: https://peterwitham.com/exploring-the-godot-game-engine
---

This weekend I spent time with the [Godot game engine](https://godotengine.org). Coming at it from the perspective of having never used it before but being aware of what it is.

First, I wanted to put aside any expectations. Deciding to do everything the way it wanted me to.

## The good parts

The interface is easy to work with. However, it does feel somewhat outdated, much like those older Java-based apps if you remember those. They have that look of being functional rather than aesthetically pleasing.

The tutorial for the 2D game gets you thinking in terms of scenes and nodes. Something that makes a lot of sense and keeps everything nicely organized.

For example, when creating the player, everything exists in one scene that gets loaded into the main game. Very sensible and easy to manage as your projects expand. This is similar to other game engines, but somehow it makes more sense in Godot.

Adding functionality also made a lot of sense with a simple-to-understand tree structure. Locating resources for a node is easy once you know how it works. This did take a few attempts before it settled in my head. This would have been easier, I think if it wasn't for the aforementioned feeling of the interface being somewhat dated.

Animated sprites are easier to create and work with than other engines I have tried. You create animations by naming them and adding images frame by frame. It is straightforward to work with. You then reference the animation names in the code, depending on which one you want to use.

Godot is open-source, which is always a win. It also has a rich community and extension support, including extra languages. If I could write native Swift in Godot, that would go a long way to making me embrace it more.

## The not so great parts

You can use three built-in coding options. Take note of the above. You can add language support via plugins.

- GDScript
- C#
- C++

I opted for GDScript in keeping with my embrace what it offers approach.

It is worth noting that Godot 4.1 C# support is still relatively new. I suspect this is one of the more popular options along with C++ and will improve over time.

Avoid using C# if you want to build for iOS, Android, or the Web. Support is currently not available.

I found GDScript to be nice, with sensible naming conventions. However, I found it difficult to work with based on my many years in other languages. This is where something like C++ or C# might be better for those used to similar languages.

For example, it uses space (or tab) to identify code blocks. It's not something I have ever cared for in any language.

I like that the editor pointed out if I had a mixture of spaces and tabs, which is a polite way of making me consistent and a good coding citizen.

There is no way to do visual coding, my preferred game development method. So, if you want that, go with Unreal Engine and Blueprints or Unity and visual scripting.

## Conclusions

This is a great way to start learning game-making for beginners. This is also a great way to get started if you are unfamiliar with coding in other languages.

If you want to build a 2D game, Godot is undoubtedly one of the better engines. It makes the work a lot easier than other engines.

Another contender is Unity. Godot is still better, in my opinion, for 2D. I'm avoiding any licensing discussion here. See my thoughts on that in this Podcast episode.

If you are an experienced programmer looking to get started, there may be better options for you. I suggest trying Godot and a few other engines before committing to one.

Like myself, I recommend finding the one that works the way you prefer and roll with that.
