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
      },
      {
        name: "הלנות",
        list: [
          {
            name: "סוג הטבת לינה",
            type: "string"
          },
          {
            name: "תאריכי זכאות",
            type: "date"
          },
          {
            name:
            "תאריך פתיחת בקשה",
             type: "date"
          },
          {
            name: "האם קיים פער",
            type: "string"
          },
          {
            name:
              "האם קיימת התממשקות בתיק האישי",
                 type: "string"
          },
          {
            name: "פערים התייחסויות",
            type: "string"
          },
          {
            name: 'היכן מתגורר היום',
            type: "string"
          },    {
            name: 'האם עבר בין פתרוננות דיור',
            type: "string"
          },    {
            name: 'במידה וכן האם קיימים תזכורים וביקורי בית חדשים בהתאם',
            type: "string"
          },    {
            name: 'תאריך קליטה ביחידה תאריך מעבר פתרון דיור',
            type: "date"
          },
              {
            name: 'תאריך ההצהרה',
            type: "date"
          },
          {
            name: "פערים התייחסויות",
        type: "date"
      }
        ]
      }, {
        name: "כרטסת בודד",
        list: [
          {
            name: "האם הכרטסת מעודכנות",
            type: "string"
          },
          {
            name: "האם דרכונים בכרטסת בודד בתוקף",
            type: "string"
          },
          {
            name:
            "נתוני מפקד עדכני",
             type: "string"
          },
          {
            name: "נתוני קרוב עדכני",
            type: "string"
          },
          {
            name:
              "יש לוודא כי מוזן מייל של הורי החיל",
                 type: "string"
          },
          {
            name: "האם הוזנו מיקומים בחגים",
            type: "string"
          },

          {
            name: 'ימי סידורים - חודשי זכאות',
            type: "string"
          },    {
            name: 'תאריך יום סידורים ',
            type: "date"
          },    {
            name: 'תאריך הזנה',
            type: "date"
          },    {
            name: 'האם נחתם וויתור',
            type: "string"
          },
            
      
        ]
      },
       {
        name: 'מעברי על תקינות הבקשות בתת"מ',
        list: [
          {
            name: "סוג הבקשה",
            type: "string"
          },
          {
            name: "תאריך פתיחה בפועל",
            type: "date"
          },
          {
            name:
            "ת פתיחה",
             type: "date"
          },
          {
            name: "האם הצהרה תואמת את ת פתיחה",
            type: "string"
          },
          {
            name:
              `סוג סגירת הבקשה חיובי שלילי אשת"פ`,
                 type: "string"
          },
          {
            name: "תאריך סגירת הבקשה והאם עומד בתקו",
            type: "string"
          },

          {
            name: 'פערים והתייחסויות במידה ויש',
            type: "string"
          },   
        ]
      },
      {
       name: '  מיוחדות והע"פים',
       list: [
         {
           name: "תאריך הזנת הטבה",
           type: "date"
         },
         {
           name: "תאריך החתמת מפקדים    ",
           type: "date"
         },
         {
           name:
           "האם ת הזנת המיוחדת תקין",
            type: "string"
         },
         {
           name: "השלמה של החתמות טלפוניות",
           type: "string"
         },
         {
           name:
             `אישור מעסיק תקין (חותמת גומי.מס מורשה)`,
                type: "string"
         },
         {
           name: "היתר עבודה בהתאם לתאריכים",
           type: "string"
         },

         {
           name: 'כרטסת מעסיק מעודכנת',
           type: "string"
         },  {
          name: 'הערות התייחסויות',
          type: "string"
        },    
       ]
     },
     {
      name: '  הטבות הבודד ',
      list: [
        {
          name: 'ביצוע ראיון מ ת"ש 3 חודשים לפני שחרור',
          type: "string"
        },
        {
          name: "האם קיבל תעודת בודד? ",
          type: "string"
        },
        {
          name:
          "האם ניצל מימון טיסה או שיש חתימת וויתור",
           type: "string"
        },
        {
          name: "האם נבדק טמפלט מחצית שירות האם נבדק בזמן",
          type: "string"
        },
        {
          name:
            `האם ניצל חו"מ ביקור הורה בארץ או חו"ל בכל שנת שירות? אם לא האם יש חתימת וויתור? האם בוצע ראיון מפקד (לאחר חזרתו מחו"מ חו"ל)`,
               type: "string"
        },
        {
          name: "שנת שירות",
          type: "string"
        },

        {
          name: 'חו"מ חול',
          type: "string"
        },  {
          name: ' אם לא ניצל, האם יש וויתור  ',
          type: "string"
        },    {
          name: 'האם בוצע ראיון מפקד בחזרתו של החייל ',
          type: "string"
        },    {
          name: ' האם יצא תזכור ',
          type: "string"
        },       {
          name: ' ת יציאת תזכור ',
          type: "date"
        },     {
          name: ' ת  ארכוב ראיון ',
          type: "date"
        },  
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
