import {getCurrentInstance} from "vue";

export const rules = {
    required: (value) => !!value || "هذا الحقل مطلوب",
    name: (value) => /^[a-zA-Z\u0600-\u06FF\s]+$/.test(value) || "من فضلك ادخل اسم صحيح (حروف ومسافات فقط)",
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || "من فضلك ادخل بريد إلكتروني صالح",
    password: (value) => /^.{8,}$/.test(value) || "كلمة المرور يجب أن تتكون من 8 أحرف أو أرقام علي الأقل",
    phoneNumber: (value) => /^(?:(?:\+|00)\d{1,3}\s?)?(?:\d{8,12})$/.test(value) || "من فضلك ادخل رقم جوال صحيح",
    agreeRules: (v) => !!v || "You must agree to continue",
    files: (v) => !v || "ملف موضوع الإفادة مطلوب",
    university: (v) => !v || "من فضلك ادخل اسم الجامعة",
    college: (v) => !v || "ملف موضوع الإفادة مطلوب",
    messageTitle: (v) => !v || "ملف موضوع الإفادة مطلوب",
    messageLvel: (v) => !v || "ملف موضوع الإفادة مطلوب",
};
