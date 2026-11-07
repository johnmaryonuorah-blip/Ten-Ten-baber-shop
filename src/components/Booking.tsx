import React from 'react';
import { format, addDays, startOfDay, isSameDay, isBefore, setHours, setMinutes, isAfter } from 'date-fns';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, CheckCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Booking() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(startOfDay(new Date()));
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [isBooked, setIsBooked] = React.useState(false);

  const dates = Array.from({ length: 14 }, (_, i) => addDays(startOfDay(new Date()), i));
  
  const generateTimeSlots = (date: Date) => {
    const slots = [];
    const start = 9; // 9 AM
    const end = 19; // 7 PM
    const now = new Date();

    for (let hour = start; hour < end; hour++) {
      for (let minute of [0, 30]) {
        const slotDate = setMinutes(setHours(date, hour), minute);
        
        // Only add if it's in the future
        if (isAfter(slotDate, now)) {
          slots.push(format(slotDate, 'HH:mm'));
        }
      }
    }
    return slots;
  };

  const timeSlots = React.useMemo(() => generateTimeSlots(selectedDate), [selectedDate]);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
      // Reset after 5 seconds
      setTimeout(() => {
        setIsBooked(false);
        setSelectedTime(null);
      }, 5000);
    }
  };

  return (
    <section id="booking" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Book Your Slot<span className="text-gold">.</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-md">
              Select a date and time that works for you. Our master barbers are ready to give you the premium treatment you deserve.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gold">
                <CalendarIcon size={24} />
                <span className="font-bold uppercase tracking-widest">Select Date</span>
              </div>
              
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                {dates.map((date) => (
                  <button
                    key={date.toISOString()}
                    onClick={() => {
                      setSelectedDate(date);
                      setSelectedTime(null);
                    }}
                    className={cn(
                      "flex-shrink-0 w-20 h-24 flex flex-col items-center justify-center border transition-all",
                      isSameDay(date, selectedDate)
                        ? "bg-white border-white text-black"
                        : "border-white/10 text-white/40 hover:border-white/40"
                    )}
                  >
                    <span className="text-xs uppercase font-bold mb-1">{format(date, 'EEE')}</span>
                    <span className="text-2xl font-black">{format(date, 'dd')}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isBooked ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="flex items-center gap-4 text-gold mb-8">
                    <Clock size={24} />
                    <span className="font-bold uppercase tracking-widest">Available Times</span>
                  </div>

                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
                    {timeSlots.length > 0 ? (
                      timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "py-3 text-sm font-bold border transition-all",
                            selectedTime === time
                              ? "bg-gold border-gold text-white"
                              : "border-white/10 text-white hover:border-white/40"
                          )}
                        >
                          {time}
                        </button>
                      ))
                    ) : (
                      <p className="col-span-full text-white/40 italic">No more slots available for today.</p>
                    )}
                  </div>

                  <button
                    disabled={!selectedTime}
                    onClick={handleBooking}
                    className={cn(
                      "w-full py-5 font-black uppercase tracking-[0.2em] transition-all",
                      selectedTime
                        ? "bg-white text-black hover:bg-gold hover:text-white"
                        : "bg-white/10 text-white/20 cursor-not-allowed"
                    )}
                  >
                    Confirm Appointment
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-2">Booking Confirmed!</h3>
                  <p className="text-white/60 mb-8">
                    We've reserved your slot for <br />
                    <span className="text-white font-bold">{format(selectedDate, 'MMMM do')} at {selectedTime}</span>
                  </p>
                  <button
                    onClick={() => setIsBooked(false)}
                    className="text-gold font-bold uppercase tracking-widest text-sm hover:underline"
                  >
                    Book another session
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
