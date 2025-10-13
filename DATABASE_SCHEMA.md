# 📊 Database Schema & Setup Guide

This file contains the database schema (structure) for your WOW-DSA learning platform. Use this to set up your Supabase database tables.

## 🎯 Purpose

We're starting simple! First, we'll just set up the basic structure. Later, as you learn more, we'll add user authentication, progress tracking, and more features.

---

## 📋 Step-by-Step: Creating Your First Table

### Goal: Store Topics in Database
Instead of reading topics from `src/data/topics.js`, we'll store them in Supabase!

### 1. Access Supabase Table Editor

1. Go to your Supabase project dashboard
2. Click on **"Table Editor"** in the left sidebar (📊 icon)
3. Click **"Create a new table"** or **"New table"** button

### 2. Create the "topics" Table

#### Table Settings:
- **Name**: `topics`
- **Description**: "Stores all DSA, PSP, and ADA topics"
- **Enable Row Level Security (RLS)**: ❌ **UNCHECK** this for now (we'll enable it later when we add user authentication)

#### Columns to Add:

| Column Name | Type | Default Value | Settings |
|------------|------|---------------|----------|
| `id` | `int8` | Auto-generated | ✅ Is Identity, ✅ Primary Key |
| `slug` | `text` | - | ✅ Unique, ❌ Nullable |
| `name` | `text` | - | ❌ Nullable |
| `track` | `text` | - | ❌ Nullable |
| `disabled` | `boolean` | `false` | ❌ Nullable |
| `created_at` | `timestamptz` | `now()` | ❌ Nullable |

#### Visual Guide for Creating Columns:

1. **id**: 
   - Click "Add column"
   - Name: `id`
   - Type: `int8`
   - Check "Is Identity"
   - Check "Is Primary Key"
   - This will auto-increment for each new topic

2. **slug**:
   - Click "Add column"
   - Name: `slug`
   - Type: `text`
   - Check "Is Unique" (no two topics can have the same slug)
   - Uncheck "Is Nullable"
   - Example values: "trees", "linked-list", "binary-search"

3. **name**:
   - Click "Add column"
   - Name: `name`
   - Type: `text`
   - Uncheck "Is Nullable"
   - Example values: "Trees", "Linked List", "Binary Search"

4. **track**:
   - Click "Add column"
   - Name: `track`
   - Type: `text`
   - Uncheck "Is Nullable"
   - Example values: "dsa", "psp", "ada"

5. **disabled**:
   - Click "Add column"
   - Name: `disabled`
   - Type: `bool` (boolean)
   - Default value: `false`
   - Uncheck "Is Nullable"
   - This marks topics that are not yet ready

6. **created_at**:
   - Click "Add column"
   - Name: `created_at`
   - Type: `timestamptz`
   - Default value: `now()`
   - Uncheck "Is Nullable"
   - Tracks when each topic was added

Click **"Save"** to create the table!

---

## 📥 Inserting Initial Data

### Option A: Using Supabase Table Editor (Visual - Easiest!)

1. In your Supabase dashboard, go to **Table Editor**
2. Click on the **topics** table
3. Click **"Insert"** → **"Insert row"**
4. Fill in the values (leave `id` and `created_at` empty - they auto-generate):
   - slug: `trees`
   - name: `Trees`
   - track: `dsa`
   - disabled: `false`
5. Click **"Save"**
6. Repeat for each topic!

### Option B: Using SQL (Faster - Copy & Paste!)

1. In Supabase, go to **SQL Editor** (</> icon on left sidebar)
2. Click **"New query"**
3. Copy and paste this SQL:

```sql
-- Insert all topics from the current topics.js file
INSERT INTO topics (slug, name, track, disabled) VALUES
  -- DSA Topics
  ('trees', 'Trees', 'dsa', false),
  ('linked-list', 'Linked List', 'dsa', false),
  ('general-maths', 'General Maths', 'dsa', false),
  ('stack', 'Stack', 'dsa', false),
  ('queue', 'Queue', 'dsa', false),
  ('merge-sort', 'Merge Sort', 'dsa', false),
  ('oop', 'Object-Oriented Programming', 'dsa', false),
  ('binary-search', 'Binary Search', 'dsa', false),
  ('bubble-sort', 'Bubble Sort', 'dsa', false),
  ('selection-sort', 'Selection Sort', 'dsa', false),
  ('insertion-sort', 'Insertion Sort', 'dsa', false),
  ('time-space-complexity', 'Time and Space Complexity', 'dsa', false),
  ('prefix-sum', 'Prefix Sum', 'dsa', false),
  ('two-pointers', 'Two Pointers', 'dsa', false),
  ('recursion', 'Recursion', 'dsa', false),
  
  -- PSP Topics
  ('variables-datatypes', 'Variables and Datatypes', 'psp', false),
  ('input-output', 'Input and Output', 'psp', false),
  ('operators', 'Operators', 'psp', false),
  ('conditional-statements', 'Conditional Statements', 'psp', false),
  ('functions', 'Functions', 'psp', false),
  ('for-loop', 'For Loop', 'psp', false),
  ('while-loop', 'While Loop', 'psp', false),
  ('list-tuple', 'List & Tuple', 'psp', true),
  ('string', 'String', 'psp', true),
  ('dictionary-sets', 'Dictionary & Sets', 'psp', true),
  ('psp-recursion', 'Recursion', 'psp', true),
  
  -- ADA Topics
  ('graphs', 'Graphs', 'ada', false),
  ('backtracking', 'Backtracking', 'ada', false),
  ('dp', 'DP', 'ada', false)
ON CONFLICT (slug) DO NOTHING;
```

4. Click **"Run"** (or press Ctrl+Enter / Cmd+Enter)
5. You should see "Success" with "30 rows affected"

---

## 🔍 Verifying Your Data

### Check if data was inserted:
```sql
SELECT * FROM topics ORDER BY track, name;
```

### Count topics by track:
```sql
SELECT track, COUNT(*) as count 
FROM topics 
GROUP BY track 
ORDER BY track;
```

You should see:
- ada: 3 topics
- dsa: 15 topics
- psp: 12 topics

---

## 🚀 Future Tables (Coming Soon!)

These tables will be added in later steps as you learn more:

### 2. `user_progress` (Step 3)
Track which topics users have completed
```sql
-- We'll create this later!
-- Columns: id, user_id, topic_id, completed, completed_at
```

### 3. `code_submissions` (Step 4)
Store code that users write in the compiler
```sql
-- We'll create this later!
-- Columns: id, user_id, topic_id, code, language, submitted_at
```

### 4. User Authentication Tables (Step 5)
Supabase handles this automatically with Auth!
```sql
-- Supabase creates these for you
-- Tables: auth.users, auth.sessions, etc.
```

---

## 💡 Understanding the Schema

### What is a "schema"?
A schema is like a blueprint for your database. It defines:
- What tables you have (like "topics", "users", "progress")
- What columns each table has (like "name", "track", "disabled")
- What type of data goes in each column (text, number, true/false)
- What rules apply (unique, required, etc.)

### Why this structure?
- **slug**: Used in URLs (e.g., `/trees`, `/linked-list`)
- **name**: What users see in the UI ("Trees", "Linked List")
- **track**: Groups topics (DSA, PSP, ADA)
- **disabled**: Lets us hide topics that aren't ready yet
- **created_at**: Helps us know when topics were added (useful for sorting)

---

## 🎓 Learning Resources

### Supabase Specific:
- [Creating Tables](https://supabase.com/docs/guides/database/tables)
- [Insert Data](https://supabase.com/docs/guides/database/insert-data)
- [Query Data](https://supabase.com/docs/guides/database/query-data)

### SQL Basics:
- [SQL CREATE TABLE](https://www.postgresql.org/docs/current/sql-createtable.html)
- [SQL INSERT](https://www.postgresql.org/docs/current/sql-insert.html)
- [SQL SELECT](https://www.postgresql.org/docs/current/sql-select.html)

---

## ✅ Checklist

- [ ] Created the `topics` table in Supabase
- [ ] Added all required columns with correct types
- [ ] Inserted all 30 topics from the SQL script
- [ ] Verified data with a SELECT query
- [ ] Counted topics by track (should see 15 DSA, 12 PSP, 3 ADA)

Once you've completed this checklist, you're ready to move to the next step: **fetching topics from Supabase in your app**! 🎉

---

## 🆘 Troubleshooting

**Error: "relation 'topics' does not exist"**
→ You haven't created the table yet. Follow the "Create the topics Table" steps above.

**Error: "duplicate key value violates unique constraint"**
→ You're trying to insert a topic with a slug that already exists. This is OK - the data is already there!

**Error: "permission denied for table topics"**
→ Check that RLS (Row Level Security) is disabled for now.

**Can't see your tables in the Table Editor?**
→ Make sure you're in the correct project. Check the project name at the top of the dashboard.

Need more help? Check the [Supabase Community](https://github.com/supabase/supabase/discussions) or their [Discord](https://discord.supabase.com/)!
