import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  const [upvotedSolutions, setUpvotedSolutions] = useState(new Map());
  const [savedChallenges, setSavedChallenges] = useState(new Map());
  const [followedChallenges, setFollowedChallenges] = useState(new Map());
  const [solutionVoteCounts, setSolutionVoteCounts] = useState(new Map());

  const toggleUpvote = (solutionId, currentCount) => {
    const isCurrentlyUpvoted = upvotedSolutions.get(solutionId) || false;

    // Update upvoted state
    setUpvotedSolutions((prev) => {
      const newMap = new Map(prev);
      newMap.set(solutionId, !isCurrentlyUpvoted);
      return newMap;
    });

    // Update vote count
    setSolutionVoteCounts((prev) => {
      const newMap = new Map(prev);
      const currentStoredCount = newMap.get(solutionId) || currentCount;
      const newCount = isCurrentlyUpvoted
        ? currentStoredCount - 1
        : currentStoredCount + 1;
      newMap.set(solutionId, newCount);
      return newMap;
    });
  };

  const toggleSave = (challengeId) => {
    setSavedChallenges((prev) => {
      const newMap = new Map(prev);
      const isCurrentlySaved = newMap.get(challengeId) || false;
      newMap.set(challengeId, !isCurrentlySaved);
      return newMap;
    });
  };

  const isUpvoted = (solutionId) => {
    return upvotedSolutions.get(solutionId) || false;
  };

  const isSaved = (challengeId) => {
    return savedChallenges.get(challengeId) || false;
  };

  const toggleFollow = (challengeId) => {
    setFollowedChallenges((prev) => {
      const newMap = new Map(prev);
      const isCurrentlyFollowing = newMap.get(challengeId) || false;
      newMap.set(challengeId, !isCurrentlyFollowing);
      return newMap;
    });
  };

  const isFollowing = (challengeId) => {
    return followedChallenges.get(challengeId) || false;
  };

  const shareChallenge = (challengeId, challengeTitle) => {
    if (navigator.share) {
      navigator.share({
        title: challengeTitle,
        text: `Check out this challenge: ${challengeTitle}`,
        url: `${window.location.origin}/challenge/${challengeId}`,
      });
    } else {
      // Fallback to clipboard
      const url = `${window.location.origin}/challenge/${challengeId}`;
      navigator.clipboard.writeText(url).then(() => {
        // You could add a toast notification here
        console.log("Challenge URL copied to clipboard!");
      });
    }
  };

  const getVoteCount = (solutionId, defaultCount) => {
    return solutionVoteCounts.get(solutionId) || defaultCount;
  };

  const value = {
    upvotedSolutions,
    savedChallenges,
    followedChallenges,
    solutionVoteCounts,
    toggleUpvote,
    toggleSave,
    toggleFollow,
    shareChallenge,
    isUpvoted,
    isSaved,
    isFollowing,
    getVoteCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
