const shelonim = [
  {
    name: "חייל בודד",

    subjects: [
      {
        name: "שאלות כלליות",
        list: [
          {
            name: "שם החייל",
            type: "string"
          },
          {
            name: "תעודת זהות",
            type: "string"
          },
          {
            name: "תאריך גיוס",
            type: "date"
          },
          {
            name: "תאריך הצבה ביחידה",
            type: "date"
          },
          {
            name: "תאריך תום שירות",
            type: "date"
          },
          {
            name: "תאריכי זכאות",
            type: "date"
          },
          {
            name: "סוג הבודד",
            type: "string"
          }
        ]
      },
      {
        name: "קליטות",
        list: [
          {
            name: "יחידה",
            type: "string"
          },
          {
            name: "תאריך הצבה ביחידה",
            type: "date"
          },
          {
            name: 'תאריך קליטת ת"ש',
            type: "date"
          },
          {
            name: "תאריך ארכוב",
            type: "date"
          },
          {
            name: "האם נפתחו בקשות בהתאם למה שהחייל העלה + תאריך פתיחה",
            type: "string"
          },
          {
            name: "פערים והתיחסויות",
            type: "string"
          }
        ]
      },
      {
        name: 'ראיונות או"מ',
        list: [
          {
            name: `תאריך קליטה שלישותית/ת. הכרה כאו"מ`,
            type: "date"
          },
          {
            name: ' תאריך קליטת ת"ש',
            type: "date"
          },
          {
            name: 'תאריך הוצאת תזכור לר. או"ם',
            type: "date"
          },
          {
            name: 'האם תג"ב תקין',
            type: "string"
          },
          {
            name: "תאריך ארכוב אזכור ",
            type: "date"
          },
          {
            name: "הערות התייחסויות -תזכור",
            type: "string"
          },
          {
            name: 'תאריך ביצוע ראיון ע"י המפקד',
            type: "date"
          },
          {
            name: 'תאריך התייחסות משקית ת"ש',
            type: "date"
          },
          {
            name: "תאריך ארכוב ראיון",
            type: "date"
          },
          {
            name: "האם נפתחו כלל הבקשות הרלוונטיות",
            type: "string"
          },
          {
            name: "הערות התייחסיות",
            type: "string"
          }
        ]
      },
      {
        name: "ביקורי בית",
        list: [
          {
            name: `תאריך קליטה שלישותית/ת. הכרה כאו"מ`,
            type: "date"
          },
          {
            name: ' תאריך קליטת ת"ש',
            type: "date"
          },
          {
            name: 'ת. הוצאת תזכור לב"ב',
            type: "date"
          },
          {
            name: "ת. ארכוב תזכור",
            type: "date"
          },
          {
            name: 'האם תג"ב תקין',
            type: "string"
          },
          {
            name: "הערות התייחסויות - תזכור",
            type: "string"
          },
          {
            name: 'ת. ביצוע ב"ב ע"י המפקד',
            type: "date"
          },
          {
            name: 'ת. התייחסות מ. ת"ש',
            type: "date"
          },
          {
            name: 'ת. ארכוב ב"ב',
            type: "date"
          },
          {
            name: "האם נפתחו כלל הבקשות הרלוונטיות",
            type: "string"
          },
          {
            name: "הערות התייחסיות",
            type: "string"
          }
        ]
      },
      {
        name: "זכאויות",
        list: [
          {
            name: "תאריך תחילת זכאות",
            type: "date"
          },
          {
            name: "תאריך תום זכאות",
            type: "date"
          },
          {
            name:
              "אם היה צורך בחידוש מה - תאריך פתיחת חידוש והאם נפתח חודשיים מראש? האם ת. הצהרה תואם ת. פתיחה?",
            type: "string"
          },
          {
            name: "פערים התייחסויות",
            type: "date"
          },
          {
            name:
              "האם קיימת התממשקות לתיק האישי? (יש לבדוק בנגררת הטבות פרט + בודד)",
            type: "string"
          },
          {
            name: "האם מוכר מגיוס? (כן/לא)",
            type: "string"
          },
          {
            name: 'האם ישנה עילה לרטרו ? (תשובת ק. ת"ש בוחנת בתת"מ)',
            type: "string"
          }
        ]
      }
    ]
  },

  {
    name: "דמו",

    subjects: [
      {
        name: "שאלות כלליות",
        list: [
          {
            name: "שם החייל",
            type: "string"
          },
          {
            name: "תעודת זהות",
            type: "string"
          },
          {
            name: "תאריך גיוס",
            type: "date"
          },
          {
            name: "תאריך הצבה ביחידה",
            type: "date"
          },
          {
            name: "תאריך תום שירות",
            type: "date"
          },
          {
            name: "תאריכי זכאות",
            type: "date"
          },
          {
            name: "סוג הבודד",
            type: "string"
          }
        ]
      },
      {
        name: "קליטות",
        list: [
          {
            name: "יחידה",
            type: "string"
          },
          {
            name: "תאריך הצבה ביחידה",
            type: "date"
          },
          {
            name: 'תאריך קליטת ת"ש',
            type: "date"
          },
          {
            name: "תאריך ארכוב",
            type: "date"
          },
          {
            name: "האם נפתחו בקשות בהתאם למה שהחייל העלה + תאריך פתיחה",
            type: "string"
          },
          {
            name: "פערים והתיחסויות",
            type: "string"
          }
        ]
      }
    ]
  }
];

export default shelonim;
