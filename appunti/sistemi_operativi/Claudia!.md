# Produttore-Consumatore
``` java
abstract class Buffer{
	int in = 0;
	int out = 0;
	int count = 0;
	int[] b = new int[10];
	int size = 10;
	
	abstract void put(int i);
	abstract int get();
}

class BufferSem extends Buffer{
	Semaphore mutex = new Semaphore(1);
	Semaphore bP = new Semaphore(1);
	Semaphore bV = new Semaphore(0);
	
	put(int i){
		bP.acquire();
		mutex.acquire();
		b[in] = i;
		in = (in + 1) % size;
		count++;
		mutex.release();
		bV.release();
	}
	
	int get(){
		bV.acquire();
		mutex.acquire();
		int i = b[out];
		out = (out + 1) % size;
		count --;
		mutex.release();
		bP.release();
		return i;
	}
}

class BufferLC extends Buffer{
	Lock l = new ReentrantLock();
	Condition bP = l.newCondition();
	Conditino bV = l.newCondition();
	
	put(int i){
		l.lock();
		try{
			while (count == size){
				bP.await();
			}
			b[in] = i;
			in = (in + 1) % size;
			count++;
			bV.signal();
		} finally {
			l.unlock();
		}
	}
	
	int get(){
		l.lock();
		try{
			while (count == 0){
				bP.await();
			}
			int i = b[out];
			out = (out + 1) % size;
			count--;
			bP.signal();
			return i
		} finally {
			l.unlock();
		}
	}
}

class BufferMN extends Buffer{
	synchronized put(int i){
		while (count == size){
			wait();
		}
		b[in] = i;
		in = (in + 1) % size;
		count++;
		notifyAll();
	}
	
	synchronized int get(){
		while(count == 0){
			wait();
		}
		int i = b[out];
		out = (out + 1) % size;
		count--;
		notifyAll();
		return i;
	}
}

```

# Lettori e scrittore
``` java


```