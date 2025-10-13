# 🚀 Quick Start: Your First 5 Minutes with Supabase

New to databases? Start here! This guide gets you up and running in 5 minutes.

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (30 seconds)
```bash
npm install
```
✅ Done! Supabase is already installed in the project.

### Step 2: Create Supabase Account (2 minutes)
1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (easiest) or email
4. Create a new project:
   - Name: `wow-dsa` (or anything you like)
   - Database password: Create a strong password (save it!)
   - Region: Choose one close to you
   - Click "Create new project"
5. ⏳ Wait ~2 minutes for your database to be ready

### Step 3: Get Your Credentials (1 minute)
1. In your Supabase project, click **Settings** (⚙️ gear icon)
2. Click **API** in the settings menu
3. You'll see two values - copy them:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long string)

### Step 4: Configure Your App (1 minute)
```bash
# Copy the example file
cp .env.local.example .env.local

# Edit .env.local and paste your credentials
# (Use any text editor: VS Code, nano, vim, etc.)
```

Your `.env.local` should look like:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Step 5: Test Connection (30 seconds)
```bash
# Start the development server
npm run dev
```

Then visit: [http://localhost:3000/api/supabase-test](http://localhost:3000/api/supabase-test)

You should see: ✅ **"Supabase connection successful!"**

---

## 🎯 What Now?

You have three options based on your experience level:

### 🟢 **Beginner Path** (Recommended for new developers)
→ Read [`SUPABASE_SETUP.md`](SUPABASE_SETUP.md) for detailed explanations
→ Follow the step-by-step learning path with small goals

### 🟡 **Intermediate Path** (Comfortable with databases)
→ Read [`DATABASE_SCHEMA.md`](DATABASE_SCHEMA.md) to create tables
→ Start implementing features using the database helpers

### 🔴 **Advanced Path** (Experienced with databases)
→ Check `src/lib/database.js` for helper functions
→ Review the schema and start building!

---

## 📚 File Guide

Here's what each file does:

| File | Purpose | Who Should Read It |
|------|---------|-------------------|
| **QUICK_START.md** (this file) | Get set up in 5 minutes | Everyone - start here! |
| **SUPABASE_SETUP.md** | Detailed learning guide | Beginners who want to understand |
| **DATABASE_SCHEMA.md** | Database structure & SQL | Anyone creating tables |
| **.env.local.example** | Template for secrets | Everyone (copy to .env.local) |
| **src/lib/supabaseClient.js** | Database connection | Developers (don't need to edit) |
| **src/lib/database.js** | Helper functions | Developers (import and use) |

---

## 🎓 Next Steps: Small Goals

After setup, try these goals one at a time:

### Goal 1: View Your Data (5 minutes)
1. Go to your Supabase dashboard
2. Click "Table Editor"
3. You'll see "No tables yet" - that's OK!

### Goal 2: Create Your First Table (10 minutes)
1. Follow [`DATABASE_SCHEMA.md`](DATABASE_SCHEMA.md)
2. Create the `topics` table
3. Insert the sample data
4. View your data in Table Editor

### Goal 3: Fetch Data in Your App (15 minutes)
1. Learn how to use the helper functions in `src/lib/database.js`
2. Replace local topics data with database queries
3. See your database data displayed in the app!

### Goal 4: Track User Progress (Coming Soon!)
Learn how to:
- Create a `user_progress` table
- Mark topics as completed
- Show completion percentage

---

## ❓ FAQ

**Q: Do I need to pay for Supabase?**
**A:** No! The free tier is generous:
- 500MB database
- 50,000 monthly active users
- Perfect for learning and small projects

**Q: What if I make a mistake?**
**A:** No worries! You can:
- Delete tables and recreate them
- Use the SQL editor to fix data
- Create a new project and start over (it's fast!)

**Q: Can I use this in production?**
**A:** Yes! Supabase is production-ready. The free tier is great for starting out, and you can upgrade as you grow.

**Q: Do I need to know SQL?**
**A:** Not immediately! We provide:
- Copy-paste SQL scripts
- Visual table editor in Supabase
- JavaScript helper functions (no SQL needed)

**Q: What if the connection test fails?**
**A:** Check:
1. Are your credentials correct in `.env.local`?
2. Did you restart the dev server after editing `.env.local`?
3. Is your Supabase project active? (Check the dashboard)
4. Is your internet connection working?

---

## 🆘 Getting Help

**Stuck? Try these:**
1. Re-read this Quick Start guide
2. Check [`SUPABASE_SETUP.md`](SUPABASE_SETUP.md) for more details
3. Visit [Supabase Documentation](https://supabase.com/docs)
4. Ask in [Supabase Discord](https://discord.supabase.com/)

**Common Issues:**
- **"Module not found: @supabase/supabase-js"** → Run `npm install`
- **".env.local not found"** → Create it from `.env.local.example`
- **"Invalid API key"** → Check you copied the full key (it's long!)
- **"Connection failed"** → Check URL format: `https://xxx.supabase.co`

---

## 🎉 You're Ready!

Once you see the success message, you've completed the basic setup!

**Next up**: Create your first database table and start storing data!

Head over to [`DATABASE_SCHEMA.md`](DATABASE_SCHEMA.md) when you're ready. 🚀

---

*Remember: Learning databases is a journey. Take it one step at a time. You've got this! 💪*
