import { defineAbility } from "@casl/ability";

export default (user: { role: string }) =>
  defineAbility((can, cannot) => {
    can("read", "Article");
    if (user.role === "staff") {
      // manageMember page
      can("read", "manageMember"); // staff Can read pages manageMember ได้
      can("create", "Member"); // staff Can add members
      cannot("delete", "Member", {
        private: true,
      }).because("You are not allowed to delete this member"); // staff Unable to delete member

      // setting page
      cannot("read", "setting"); // staff Unable to access page setting.vue ได้
    } else if (user.role === "admin") {
      can("manage", "all"); // admin Can manage everything
    }
  });
