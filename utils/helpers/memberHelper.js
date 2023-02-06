import Member from "../models/member.model.js";

export const sendCreateMember = async (member) => {
  const newMember = new Member(member);
  const data = await newMember.save();

  return data;
};
